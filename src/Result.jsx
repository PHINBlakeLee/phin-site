// Result page — 스코어 결과 + Supabase 저장 + 앱 연결
// window.PHIN.score()는 src/scoring.js v5 사용

const SUPABASE_URL = 'https://ytseevffdonnfxcgfzxe.supabase.co';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.phin.health';
function getSupabaseKey() { return window.__PHIN_SUPABASE_KEY__ || ''; }

// 앱이 설치되어 있으면 phin:// 딥링크로 점수를 전달하고, 설치 안 됐으면 Play Store로 이동
function openAppOrPlayStore(score, tier) {
  const appUrl = `phin://score?value=${encodeURIComponent(score)}&tier=${encodeURIComponent(tier)}`;
  let appOpened = false;
  const onVisibilityChange = () => { if (document.hidden) appOpened = true; };
  document.addEventListener('visibilitychange', onVisibilityChange);
  window.location.href = appUrl;
  setTimeout(() => {
    document.removeEventListener('visibilitychange', onVisibilityChange);
    if (!appOpened) window.open(PLAY_STORE_URL, '_blank');
  }, 1500);
}

window.saveToSupabase = async function saveToSupabase(raw, email) {
  const SUPABASE_KEY = getSupabaseKey();
  if (!SUPABASE_KEY) { console.warn("Supabase 키 없음"); return null; }
  try {
    const token = crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2) + Date.now().toString(36);

      const payload = {
        email:          email || null,
        token,
        transferred:    false,
        gender:         raw.gender,
        age:            raw.age,
        height:         raw.height,
        weight:         raw.weight,
        bmi:            raw.bmi,
        mbti:           raw.mbti,
        web_phin_score: raw.web_phin_score,
        web_body_age:   raw.web_body_age,
        smoking_status: raw.smoking_status || 'none',
        drinking_status: raw.drinking_status || 'none',
      };
    const res = await fetch(`${SUPABASE_URL}/rest/v1/web_sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey':        SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer':        'return=representation',
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(await res.text());
    return token;
  } catch (e) {
    console.warn('Supabase 저장 오류 (무시):', e);
    return null;
  }
};

// ── scoring.js v5 결과로 1차 분석 문장 생성 ──
function buildOneLiners(r, answers) {
  const lines = [];
  const bd = r.breakdown || {};

  // 흡연
  if (bd.smoking > 0) {
    lines.push(`흡연이 이번 점수에서 가장 큰 영향을 미쳤습니다. 금연을 시작하면 가장 빠르게 점수를 올릴 수 있습니다.`);
  }
  // 음주
  if (bd.drinking > 8) {
    lines.push(`음주 빈도가 높아 간 건강과 수면의 질에 영향을 주고 있습니다. 주 2회 이하로 줄이면 변화가 시작됩니다.`);
  } else if (bd.drinking > 0) {
    lines.push(`음주 습관이 점수에 일부 영향을 주고 있습니다. 음주량을 줄이면 점수 개선에 도움이 됩니다.`);
  }
  // 운동
  if (bd.exercise > 8) {
    lines.push(`규칙적인 운동을 시작하면 점수를 빠르게 끌어올릴 수 있습니다. 주 2회, 30분부터 시작해보세요.`);
  } else if (bd.exercise > 0) {
    lines.push(`운동 빈도를 주 3회 이상으로 늘리면 점수 상승 여력이 있습니다.`);
  }
  // 수면
  if (bd.sleep > 8) {
    lines.push(`수면 시간이 부족합니다. 하루 7~8시간 수면이 회복과 점수 개선의 핵심입니다.`);
  } else if (bd.sleep > 0) {
    lines.push(`수면 시간을 조금 더 확보하면 컨디션과 점수 모두 개선됩니다.`);
  }
  // 스트레스
  if (bd.stress > 6) {
    lines.push(`스트레스 수준이 높습니다. PHIN 코치의 사색 루틴이 도움이 될 수 있습니다.`);
  }
  // BMI
  if (bd.bmi > 4) {
    lines.push(`체중 관리를 시작하면 심혈관 건강 지표가 함께 개선됩니다.`);
  }

  // 가점 항목
  if (bd.bonus > 5) {
    lines.push(`금연·금주·꾸준한 운동 등 건강 관리 노력이 점수에 긍정적으로 반영됐습니다.`);
  }

  // 최소 1개 보장
  if (lines.length === 0) {
    lines.push(`전반적으로 양호한 생활습관을 유지하고 있습니다. 건강검진 데이터를 추가하면 더 정밀한 분석이 가능합니다.`);
  }

  return lines;
}

// ── 동년배 위치 표시 문구 (상위X% 금지) ──
function tierLabelToKorean(tierLabel) {
  // scoring.js v5의 tierLabel 그대로 사용
  return tierLabel || '중위';
}

function Result({ answers, onRestart }) {
  console.log('Result answers FULL:', JSON.stringify(answers));

  // ── scoring.js v5 호출 ──
  const r = window.PHIN.score(answers);

  // v5 구조: r.tierColor, r.tierName, r.tierLabel, r.finalScore, r.bodyAge, r.breakdown
  const tierColor = r.tierColor || '#60A5FA';
  const tierGlow  = tierColor + '33';
  const displayScore = r.finalScore ?? Math.round(r.totalScore ?? 0);
  const tierName  = r.tierName || 'BLUE PHiN';
  const tierLabel = r.tierLabel || '중위'; // '최상위 1%' | '상위권' | '중상위' 등
  const bodyAge   = r.bodyAge ?? answers.ageNum ?? 30;
  const realAge   = parseInt(answers.ageNum || answers.age || 30);
  const mbtiText  = answers.mbtiDirect || answers.mbti || '';
  const accuracy  = r.accuracyIndex ? Math.round(r.accuracyIndex * 100) : 82;
  const oneLiners = buildOneLiners(r, answers);

  const [email,      setEmail]      = React.useState('');
  const [saved,      setSaved]      = React.useState(false);
  const [saving,     setSaving]     = React.useState(false);
  const [token,      setToken]      = React.useState(null);
  const [emailError, setEmailError] = React.useState('');

  // 결과 화면 진입 시 자동 저장 (이메일 없이)
  React.useEffect(() => {
    if (window.PHIN._lastRaw && getSupabaseKey()) {
      window.saveToSupabase(window.PHIN._lastRaw, null).then(t => {
        if (t) setToken(t);
      });
    }
  }, []);

  const handleEmailSave = async () => {
    if (!email || saving) return;
    setEmailError('');
    setSaving(true);
    try {
      const checkRes = await fetch(
        `${SUPABASE_URL}/rest/v1/user_profiles?email=eq.${encodeURIComponent(email)}&select=id&limit=1`,
        { headers: { 'apikey': getSupabaseKey(), 'Authorization': 'Bearer ' + getSupabaseKey() } }
      );
      const existing = await checkRes.json();
      if (existing && existing.length > 0) {
        setEmailError('이미 가입된 이메일입니다. 앱에서 직접 로그인해주세요.');
        setSaving(false);
        return;
      }
      const t = await window.saveToSupabase(window.PHIN._lastRaw, email);
      if (t) { setToken(t); setSaved(true); }
    } catch(e) {
      setEmailError('오류가 발생했습니다. 다시 시도해주세요.');
    }
    setSaving(false);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* 상단 바 */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        background: 'rgba(10,15,12,0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line)',
      }}>
        <div className="phin-container" style={{ height:56, display:'flex', alignItems:'center' }}>
          <Logo size={18} />
          <div style={{ flex:1 }} />
          <button onClick={onRestart} className="phin-btn-ghost" style={{
            background:'transparent', border:0, padding:'8px 10px',
            color:'var(--ink-mid)', cursor:'pointer',
            display:'inline-flex', alignItems:'center', gap:6,
            fontSize:14, fontFamily:'var(--font-body)', whiteSpace:'nowrap',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>
            </svg>
            다시 진단
          </button>
        </div>
      </div>

      <main className="phin-container-sm" style={{ paddingTop:64, paddingBottom:96 }}>

        {/* 스코어 히어로 */}
        <section style={{ textAlign:'center', position:'relative' }}>
          <div aria-hidden style={{
            position:'absolute', inset:'-20% -20% auto -20%', height:500,
            background:`radial-gradient(50% 60% at 50% 40%, ${tierGlow}, transparent 70%)`,
            pointerEvents:'none', zIndex:0,
          }} />
          <div style={{ position:'relative', zIndex:1 }}>
            <div className="phin-micro" style={{ color:'var(--ink-mid)', marginBottom:16 }}>YOUR PHIN SCORE</div>
            <div className="phin-score" style={{ color:tierColor }}>{displayScore}</div>
            <div className="phin-body t-lo" style={{
              fontFamily:'var(--font-numeric)', fontWeight:600, letterSpacing:'0.04em',
            }}>/ 100</div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:12,
              padding:'12px 24px', borderRadius:9999,
              background:'var(--bg-elev-1)', border:`1px solid ${tierColor}`, marginTop:32,
            }}>
              <span style={{
                width:12, height:12, borderRadius:9999, background:tierColor,
                boxShadow:`0 0 16px ${tierColor}`,
              }} />
              <span style={{
                fontFamily:'var(--font-display)', fontSize:18, fontWeight:800,
                color:'var(--ink-hi)', letterSpacing:'-0.02em', whiteSpace:'nowrap',
              }}>{tierName}</span>
            </div>

            {/* 정확도 신뢰지수 */}
            <div style={{
              marginTop:16, display:'inline-flex', alignItems:'center', gap:6,
              padding:'6px 14px', borderRadius:9999,
              background:'var(--bg-elev-1)', border:'1px solid var(--line)',
            }}>
              <span style={{ fontSize:11, color:'var(--ink-mid)' }}>📊 점수 신뢰도</span>
              <span style={{ fontSize:13, fontWeight:700, color:'var(--accent)' }}>{accuracy}%</span>
              <span style={{ fontSize:11, color:'var(--ink-lo)' }}>· 건강검진 추가 시 더 정밀해집니다</span>
            </div>
          </div>
        </section>

        {/* 3종 인사이트 카드 — 항상 3칸 고정 */}
        <section style={{ marginTop:64 }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="phin-insight-grid">
            <InsightCard
              eyebrow="성향 유형"
              big={mbtiText || '?'}
              small={mbtiText ? '16가지 성향 기반' : '앱에서 설정 가능'}
            />
            <InsightCard
              eyebrow="신체나이"
              big={`${bodyAge}세`}
              small={`실제 ${realAge}세 · ${bodyAge - realAge > 0 ? '+' : ''}${bodyAge - realAge}세`}
              tone={bodyAge > realAge ? 'warn' : 'good'}
            />
            <InsightCard
              eyebrow="동년배 위치"
              big={tierLabel}
              small={`${realAge}세 ${answers.gender === 'female' ? '여성' : '남성'} 기준`}
            />
          </div>
        </section>

        {/* 1차 분석 리포트 */}
        <section style={{ marginTop:32 }}>
          <div className="phin-card">
            <div className="phin-micro" style={{ color:'var(--accent)', marginBottom:16 }}>1차 분석 리포트</div>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:14 }}>
              {oneLiners.map((line, i) => (
                <li key={i} style={{ display:'flex', gap:12, alignItems:'flex-start', color:'var(--ink-hi)', fontSize:15, lineHeight:1.55 }}>
                  <span style={{ flexShrink:0, marginTop:8, width:6, height:6, borderRadius:9999, background:'var(--accent)' }} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 티어 사다리 */}
        <section style={{ marginTop:32 }}>
          <div className="phin-card">
            <div className="phin-micro t-mid" style={{ marginBottom:16 }}>티어 사다리</div>
            <TierLadder currentTier={r.tier} score={displayScore} />
            <p className="phin-body-sm t-mid" style={{ marginTop:16 }}>
              맞춤 코칭을 한 달만 따라가면 평균 <b style={{ color:'var(--accent)' }}>2~6포인트</b> 상승.
              식단을 병행하면 최대 <b style={{ color:'var(--accent)' }}>10포인트</b>까지 올라갑니다.
            </p>
          </div>
        </section>

        {/* 앱 연결 */}
        <section style={{ marginTop:32 }}>
          <div className="phin-card" style={{ border:'1px solid var(--line-strong)' }}>
            <div className="phin-micro" style={{ color:'var(--accent)', marginBottom:12 }}>
              📱 앱에서 이어서 보기
            </div>
            <p className="phin-body-sm t-mid" style={{ marginBottom:16 }}>
              이메일을 등록하면 앱 설치 후 같은 이메일로 로그인할 때<br />
              지금 입력한 정보가 <b style={{ color:'var(--ink-hi)' }}>자동으로 채워집니다.</b> 다시 입력할 필요 없어요.
            </p>

            {saved ? (
              <div style={{
                background:'var(--brand-mute)', border:'1px solid var(--accent)',
                borderRadius:12, padding:'14px 18px',
                display:'flex', alignItems:'center', gap:10,
              }}>
                <span style={{ color:'var(--accent)', fontSize:18 }}>✓</span>
                <div>
                  <div style={{ color:'var(--ink-hi)', fontWeight:600, fontSize:14 }}>등록 완료!</div>
                  <div style={{ color:'var(--ink-mid)', fontSize:12, marginTop:2 }}>
                    앱 설치 후 <b>{email}</b>로 로그인하면 자동 연결됩니다.
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display:'flex', gap:8 }}>
                <input
                  type="email"
                  placeholder="이메일 주소 입력"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleEmailSave()}
                  style={{
                    flex:1, padding:'12px 16px',
                    background:'var(--bg-elev-2)', border:'1px solid var(--line-strong)',
                    borderRadius:10, color:'var(--ink-hi)',
                    fontSize:14, fontFamily:'var(--font-body)', outline:'none',
                  }}
                />
                <button
                  className="phin-btn phin-btn-primary"
                  onClick={handleEmailSave}
                  disabled={!email || saving}
                  style={{ padding:'12px 20px', fontSize:14, whiteSpace:'nowrap' }}
                >
                  {saving ? '저장 중…' : '앱 연결'}
                </button>
              </div>
            )}
            {emailError && (
              <div style={{
                marginTop:8, padding:'10px 14px',
                background:'rgba(220,38,38,0.15)',
                border:'1px solid rgba(220,38,38,0.4)',
                borderRadius:10, color:'#f87171', fontSize:13,
              }}>
                ⚠️ {emailError}
              </div>
            )}
            {saved && (
              <button
                onClick={() => { setSaved(false); setToken(null); setEmail(''); setEmailError(''); }}
                style={{
                  marginTop:8, background:'none', border:'none',
                  color:'var(--ink-lo)', fontSize:12, cursor:'pointer',
                  textDecoration:'underline', padding:0,
                }}
              >
                다른 이메일로 다시 연결하기
              </button>
            )}
          </div>
        </section>

        {/* 잠긴 프리미엄 */}
        <section style={{ marginTop:32 }}>
          <div className="phin-card" style={{
            position:'relative', overflow:'hidden',
            border:'1px dashed var(--line-strong)',
          }}>
            <div className="phin-micro" style={{ color:'var(--ink-lo)', marginBottom:16 }}>🔒 앱에서만 열람 가능</div>
            <h3 className="phin-display-sm t-hi" style={{ marginBottom:8 }}>
              정밀 코칭 리포트 + 매일 맞춤 운동
            </h3>
            <p className="phin-body t-mid" style={{ marginBottom:0, maxWidth:480 }}>
              주간·월간 PHIN스코어 추이, 부위별 신체 대시보드, 매일 다른 맞춤 운동,
              PHIN 코치와의 1:1 피드백 — 앱 다운로드 시 잠금 해제됩니다.
            </p>
            <div style={{
              position:'absolute', inset:'auto -10% -50% auto', width:280, height:280,
              background:'radial-gradient(circle, var(--brand-glow), transparent 70%)',
              pointerEvents:'none',
            }} />
          </div>
        </section>

        {/* CTA */}
        <section style={{ marginTop:40, display:'flex', flexDirection:'column', gap:12, alignItems:'stretch' }}>
          <button className="phin-btn phin-btn-primary" style={{ width:'100%', padding:'18px 24px' }}
            onClick={() => openAppOrPlayStore(displayScore, r.tier)}>
            PHIN 앱에서 계속하기
          </button>
          <button className="phin-btn phin-btn-secondary" style={{ width:'100%' }}
            onClick={() => {
              const text = `내 PHIN스코어는 ${displayScore}점 (${tierName})! 신체나이 ${bodyAge}세. 너는 몇 점이야? phin.health`;
              if (navigator.share) navigator.share({ text });
              else { navigator.clipboard.writeText(text); alert('클립보드에 복사됐어요!'); }
            }}>
            결과 공유하기 — 친구 점수와 비교
          </button>
          <div className="phin-caption t-lo" style={{ textAlign:'center', marginTop:8 }}>
            카카오 · 인스타 공유로 친구 PHIN스코어와 비교해보세요
          </div>
        </section>

      </main>
    </div>
  );
}

function InsightCard({ eyebrow, big, small, tone }) {
  const color = tone === 'good' ? 'var(--accent)' : tone === 'warn' ? 'var(--tier-yellow)' : 'var(--ink-hi)';
  return (
    <div className="phin-card" style={{ display:'flex', flexDirection:'column', gap:6, minHeight:140 }}>
      <div className="phin-micro t-lo">{eyebrow}</div>
      <div style={{
        fontFamily:'var(--font-display)', fontWeight:800,
        fontSize:28, letterSpacing:'-0.02em', color, lineHeight:1.1, marginTop:8,
      }}>{big}</div>
      <div className="phin-body-sm t-mid" style={{ marginTop:4 }}>{small}</div>
    </div>
  );
}

function TierLadder({ currentTier, score }) {
  // v5 티어 키 목록 (하→상)
  const tiers = [
    { key:'GRAY',     name:'GRAY',  color:'#9CA3AF', label:'하위권'   },
    { key:'RED',      name:'RED',   color:'#F87171', label:'중하위'   },
    { key:'YELLOW',   name:'YELLOW',color:'#FBBF24', label:'중위'     },
    { key:'BLUE',     name:'BLUE',  color:'#60A5FA', label:'중상위'   },
    { key:'GREEN',    name:'GREEN', color:'#34D378', label:'상위권'   },
    { key:'BLACK',    name:'BLACK', color:'#E5E5E5', label:'최상위 5%'},
    { key:'THE_PHIN', name:'THE',   color:'#FFD700', label:'최상위 1%'},
  ];
  return (
    <div style={{ display:'flex', gap:4, flexWrap:'wrap' }} className="phin-ladder">
      {tiers.map(t => {
        const active = t.key === currentTier;
        return (
          <div key={t.key} style={{
            flex:'1 1 12%', minWidth:40, borderRadius:10,
            border: active ? `1px solid ${t.color}` : '1px solid var(--line)',
            background: active ? `${t.color}18` : 'transparent',
            padding:'10px 8px', display:'flex', flexDirection:'column', gap:4,
            opacity: active ? 1 : 0.5,
            transition:'opacity 220ms',
          }}>
            <div style={{
              width:8, height:8, borderRadius:9999, background:t.color,
              boxShadow: active ? `0 0 10px ${t.color}` : 'none',
            }} />
            <div style={{
              fontFamily:'var(--font-display)', fontSize:10, fontWeight:800,
              color: active ? 'var(--ink-hi)' : 'var(--ink-mid)',
            }}>{t.name}</div>
            <div style={{ fontSize:9, color:'var(--ink-lo)' }}>{t.label}</div>
          </div>
        );
      })}
    </div>
  );
}

window.Result = Result;

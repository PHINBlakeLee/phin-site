// Landing page — hero, value prop, "당신은 핀인가?" slogan, start CTA.

function ScoreInfoModal({ onClose }) {
  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, zIndex:1000,
      background:'rgba(0,0,0,0.7)',
      backdropFilter:'blur(8px)',
      display:'flex', alignItems:'center', justifyContent:'center',
      padding:'20px',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:'var(--bg-elev-1)',
        border:'1px solid var(--line-strong)',
        borderRadius:20, padding:'32px 28px',
        maxWidth:520, width:'100%',
        maxHeight:'85vh', overflowY:'auto',
      }}>
        {/* 헤더 */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
          <div>
            <div style={{ fontFamily:'var(--font-numeric)', fontSize:11, fontWeight:700, color:'var(--accent)', letterSpacing:'0.08em', marginBottom:6 }}>HOW IT WORKS</div>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:800, color:'var(--ink-hi)', margin:0, letterSpacing:'-0.02em' }}>PHIN스코어 산출 방식</h2>
          </div>
          <button onClick={onClose} style={{
            background:'var(--bg-elev-2)', border:'1px solid var(--line)',
            borderRadius:9999, width:36, height:36,
            color:'var(--ink-mid)', cursor:'pointer', fontSize:16,
            display:'flex', alignItems:'center', justifyContent:'center',
            flexShrink:0,
          }}>✕</button>
        </div>

        {/* 핵심 철학 */}
        <div style={{
          background:'var(--brand-mute)', border:'1px solid var(--accent)',
          borderRadius:14, padding:'16px 18px', marginBottom:24,
        }}>
          <p style={{ color:'var(--ink-hi)', fontSize:14, lineHeight:1.7, margin:0, fontWeight:500 }}>
            PHIN스코어는 단순한 건강 점수가 아닙니다.<br />
            <b style={{ color:'var(--accent)' }}>동년배 대비 상대적 건강 위치</b>를 보여주며,
            나이가 들어도 꾸준한 관리로 높은 점수를 유지할 수 있습니다.
          </p>
        </div>

        {/* 산출 항목 */}
        <div style={{ marginBottom:24 }}>
          <div style={{ fontSize:12, fontWeight:700, color:'var(--ink-mid)', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:14 }}>산출 항목</div>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {[
              { icon:'🚬', label:'흡연', desc:'흡연 여부·기간·양. 나이가 많을수록 누적 손상으로 감점이 커집니다.', weight:'최대 -25점' },
              { icon:'🍺', label:'음주', desc:'음주 빈도와 양. 매일 음주는 간 건강과 수면에 복합 영향을 줍니다.', weight:'최대 -20점' },
              { icon:'🏃', label:'운동', desc:'주간 운동 빈도. 50대 이상은 같은 운동량이어도 더 중요하게 반영됩니다.', weight:'최대 -15점' },
              { icon:'🌙', label:'수면', desc:'하루 평균 수면 시간. 7~8시간이 최적, 5시간 이하는 크게 감점됩니다.', weight:'최대 -15점' },
              { icon:'🧠', label:'스트레스', desc:'일상적인 스트레스 수준. 만성 스트레스는 면역·심혈관에 영향을 줍니다.', weight:'최대 -10점' },
              { icon:'⚖️', label:'BMI', desc:'체중과 키로 산출. 정상 범위(18.5~25)가 0점, 비만도에 따라 감점됩니다.', weight:'최대 -12점' },
            ].map((item, i) => (
              <div key={i} style={{
                display:'flex', gap:14, alignItems:'flex-start',
                background:'var(--bg-elev-2)', borderRadius:12, padding:'14px 16px',
              }}>
                <span style={{ fontSize:22, flexShrink:0, marginTop:1 }}>{item.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:4 }}>
                    <span style={{ fontWeight:700, fontSize:14, color:'var(--ink-hi)' }}>{item.label}</span>
                    <span style={{ fontSize:11, fontWeight:700, color:'#F87171', background:'rgba(248,113,113,0.12)', padding:'2px 8px', borderRadius:9999 }}>{item.weight}</span>
                  </div>
                  <p style={{ fontSize:12, color:'var(--ink-mid)', margin:0, lineHeight:1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 나이 누적 계수 */}
        <div style={{ marginBottom:24 }}>
          <div style={{ fontSize:12, fontWeight:700, color:'var(--ink-mid)', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:14 }}>나이 누적 계수</div>
          <div style={{ background:'var(--bg-elev-2)', borderRadius:14, padding:'16px', marginBottom:10 }}>
            <p style={{ fontSize:12, color:'var(--ink-mid)', margin:'0 0 12px 0', lineHeight:1.6 }}>
              같은 나쁜 습관도 나이에 따라 감점이 달라집니다. 20대의 흡연과 50대의 흡연은 몸에 미치는 누적 영향이 다르기 때문입니다.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6 }}>
              {[
                { age:'20대', mul:'×0.6', desc:'누적 전' },
                { age:'30대', mul:'×0.85', desc:'누적 시작' },
                { age:'40대', mul:'×1.0', desc:'기준점' },
                { age:'50대', mul:'×1.3', desc:'누적 가속' },
                { age:'60대', mul:'×1.6', desc:'위험 구간' },
                { age:'70대+', mul:'×1.8', desc:'회복 저하' },
              ].map((item, i) => (
                <div key={i} style={{
                  background:'var(--bg-elev-1)', borderRadius:10, padding:'10px',
                  textAlign:'center', border:'1px solid var(--line)',
                }}>
                  <div style={{ fontSize:11, color:'var(--ink-mid)', marginBottom:4 }}>{item.age}</div>
                  <div style={{ fontFamily:'var(--font-numeric)', fontSize:16, fontWeight:800, color: i < 2 ? 'var(--accent)' : i === 2 ? 'var(--ink-hi)' : '#F87171' }}>{item.mul}</div>
                  <div style={{ fontSize:10, color:'var(--ink-lo)', marginTop:2 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 회복 가점 */}
        <div style={{ marginBottom:24 }}>
          <div style={{ fontSize:12, fontWeight:700, color:'var(--ink-mid)', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:14 }}>회복·관리 가점</div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {[
              { icon:'✅', label:'금연 2년 이상', point:'+10점' },
              { icon:'✅', label:'금주 2년 이상', point:'+8점' },
              { icon:'✅', label:'운동 6개월 이상 꾸준히', point:'+7점' },
              { icon:'✅', label:'안정시 심박수 60bpm 이하', point:'+5점' },
            ].map((item, i) => (
              <div key={i} style={{
                display:'flex', justifyContent:'space-between', alignItems:'center',
                background:'var(--bg-elev-2)', borderRadius:10, padding:'12px 16px',
              }}>
                <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                  <span>{item.icon}</span>
                  <span style={{ fontSize:13, color:'var(--ink-hi)' }}>{item.label}</span>
                </div>
                <span style={{ fontSize:12, fontWeight:700, color:'var(--accent)', background:'rgba(57,255,106,0.1)', padding:'2px 10px', borderRadius:9999 }}>{item.point}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize:11, color:'var(--ink-lo)', margin:'10px 0 0 0', lineHeight:1.6 }}>
            * 회복·관리 가점 합산 최대 +25점. 나이와 무관하게 노력하면 점수가 올라갑니다.
          </p>
        </div>

        {/* 티어 시스템 */}
        <div style={{ marginBottom:24 }}>
          <div style={{ fontSize:12, fontWeight:700, color:'var(--ink-mid)', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:14 }}>동년배 티어 시스템</div>
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            {[
              { name:'THE PHiN', label:'최상위 1%',  color:'#FFD700', cond:'건강검진 3회+ 전 수치 정상' },
              { name:'BLACK',    label:'최상위 5%',  color:'#C0C0C0', cond:'건강검진 1회 이상 등록' },
              { name:'GREEN',    label:'상위권',     color:'#34D378', cond:'생활습관 입력만으로 달성 가능' },
              { name:'BLUE',     label:'중상위',     color:'#60A5FA', cond:'' },
              { name:'YELLOW',   label:'중위',       color:'#FBBF24', cond:'' },
              { name:'RED',      label:'중하위',     color:'#F87171', cond:'' },
              { name:'GRAY',     label:'하위권',     color:'#9CA3AF', cond:'' },
            ].map((t, i) => (
              <div key={i} style={{
                display:'flex', alignItems:'center', gap:12,
                padding:'10px 14px', borderRadius:10,
                background:'var(--bg-elev-2)', border:`1px solid ${t.color}22`,
              }}>
                <div style={{ width:10, height:10, borderRadius:9999, background:t.color, flexShrink:0, boxShadow:`0 0 8px ${t.color}` }} />
                <span style={{ fontFamily:'var(--font-display)', fontSize:13, fontWeight:800, color:t.color, width:90, flexShrink:0 }}>{t.name}</span>
                <span style={{ fontSize:12, color:'var(--ink-mid)', width:70, flexShrink:0 }}>{t.label}</span>
                {t.cond && <span style={{ fontSize:11, color:'var(--ink-lo)' }}>{t.cond}</span>}
              </div>
            ))}
          </div>
          <p style={{ fontSize:11, color:'var(--ink-lo)', margin:'10px 0 0 0', lineHeight:1.6 }}>
            * 티어는 동년배 기준 상대 위치입니다. 60세가 60대 상위 1%면 THE PHiN — 모든 나이에서 달성 가능합니다.
          </p>
        </div>

        {/* 닫기 버튼 */}
        <button onClick={onClose} className="phin-btn phin-btn-primary" style={{ width:'100%', padding:'16px' }}>
          확인했습니다
        </button>
      </div>
    </div>
  );
}

function Landing({ onStart }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      {showModal && <ScoreInfoModal onClose={() => setShowModal(false)} />}

      <header style={{
        position:'sticky', top:0, zIndex:10,
        background:'rgba(11,15,13,0.78)',
        backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)',
        borderBottom:'1px solid var(--line)',
      }}>
        <div className="phin-container" style={{ height:64, display:'flex', alignItems:'center', gap:24 }}>
          <Logo size={22} />
          <nav className="phin-nav-desktop" style={{ display:'flex', gap:24, marginLeft:32 }}>
            <a className="phin-body-sm t-mid" style={{ textDecoration:'none', cursor:'pointer', whiteSpace:'nowrap' }}>서비스</a>
            <a className="phin-body-sm t-mid" style={{ textDecoration:'none', cursor:'pointer', whiteSpace:'nowrap' }}>PHIN스코어</a>
            <a className="phin-body-sm t-mid" style={{ textDecoration:'none', cursor:'pointer', whiteSpace:'nowrap' }}>티어</a>
            <a className="phin-body-sm t-mid" style={{ textDecoration:'none', cursor:'pointer', whiteSpace:'nowrap' }}>클럽</a>
          </nav>
          <div style={{ flex:1 }} />
          <a className="phin-body-sm t-mid phin-nav-desktop" style={{ textDecoration:'none', cursor:'pointer', whiteSpace:'nowrap' }}>앱 다운로드</a>
          <button className="phin-btn phin-btn-primary" onClick={onStart} style={{ padding:'10px 18px', fontSize:14 }}>진단 시작</button>
        </div>
      </header>

      <section style={{ paddingTop:96, paddingBottom:64, position:'relative', overflow:'hidden' }}>
        <div aria-hidden style={{
          position:'absolute', inset:'auto 0 0 0', height:600,
          background:'radial-gradient(60% 80% at 50% 100%, rgba(57,255,106,0.10), transparent 70%)',
          pointerEvents:'none',
        }} />
        <div className="phin-container" style={{ position:'relative', textAlign:'center' }}>
          <div className="phin-badge phin-badge-brand" style={{ marginBottom:32 }}>
            <span style={{ width:6, height:6, borderRadius:9999, background:'var(--accent)' }} />
            Salus Omnibus · 모두를 위한 건강
          </div>
          <h1 className="phin-hero">
            당신은 <span className="phin-serif" style={{ color:'var(--accent)', fontWeight:300 }}>핀</span>인가,
            <br /><span style={{ color:'var(--ink-mid)' }}>아닌가?</span>
          </h1>
          <p className="phin-body-lg t-mid" style={{ marginTop:28, marginLeft:'auto', marginRight:'auto', maxWidth:540 }}>
            6가지 질문으로 산출되는 PHIN스코어. 당신의 신체나이, 동년배 비교, 그리고 어떤 핀(PHIN) 유형인지 30초 안에 알려드립니다.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', marginTop:40, flexWrap:'wrap' }}>
            <button className="phin-btn phin-btn-primary" onClick={onStart}>
              무료 진단 시작하기
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
            <button className="phin-btn phin-btn-secondary" onClick={() => setShowModal(true)}>
              어떻게 산출되나요?
            </button>
          </div>
          <div style={{ display:'flex', gap:24, justifyContent:'center', marginTop:36, flexWrap:'wrap' }}>
            <Stat n="30초" label="에 진단 완료" />
            <Stat n="6단계" label="설문" />
            <Stat n="16가지" label="성향 유형" />
            <Stat n="0~100" label="PHIN스코어" />
          </div>
        </div>
      </section>

      <section style={{ padding:'64px 0' }}>
        <div className="phin-container">
          <div className="phin-micro" style={{ color:'var(--accent)', textAlign:'center', marginBottom:16 }}>PHIN 티어 시스템</div>
          <h2 className="phin-display-md t-hi" style={{ textAlign:'center', marginBottom:48 }}>7가지 등급, 점수에 따라 달라집니다</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:8 }} className="phin-tier-grid">
            <TierCard color="#9CA3AF" name="GRAY"   range="하위권" />
            <TierCard color="#F87171" name="RED"    range="중하위" />
            <TierCard color="#FBBF24" name="YELLOW" range="중위" />
            <TierCard color="#60A5FA" name="BLUE"   range="중상위" />
            <TierCard color="#34D378" name="GREEN"  range="상위권" featured />
            <TierCard color="#E5E5E5" name="BLACK"  range="최상위 5%" />
            <TierCard color="#FFD700" name="THE"    range="최상위 1%" />
          </div>
        </div>
      </section>

      <section style={{ padding:'64px 0' }}>
        <div className="phin-container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }} className="phin-feature-grid">
            <Feature n="01" title="PHIN스코어" body="6개 영역 종합 점수. 동년배 대비 어디쯤인지 위치로 비교됩니다." />
            <Feature n="02" title="신체나이" body="실제 나이가 아닌, 생활습관이 만든 진짜 나이. 평균 4~7세 차이가 납니다." />
            <Feature n="03" title="16가지 성향" body="16가지 성향 기반 건강 행동 유형. 같은 점수라도 코칭 톤이 달라집니다." />
          </div>
        </div>
      </section>

      <section style={{ padding:'96px 0' }}>
        <div className="phin-container-sm">
          <div className="phin-card" style={{ textAlign:'center', padding:48, border:'1px solid var(--line-strong)', background:'linear-gradient(180deg, var(--bg-elev-1), var(--bg))' }}>
            <h3 className="phin-display-md t-hi" style={{ marginBottom:16 }}>너 PHIN 몇 점이야?</h3>
            <p className="phin-body-lg t-mid" style={{ marginBottom:32 }}>일상 인사가 될 만큼 정확한 건강 지표. 지금 측정해보세요.</p>
            <button className="phin-btn phin-btn-primary" onClick={onStart}>지금 시작하기 — 30초</button>
          </div>
        </div>
      </section>

      <footer style={{ borderTop:'1px solid var(--line)', padding:'32px 0', marginTop:32 }}>
        <div className="phin-container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <Logo size={16} />
          <div className="phin-caption t-lo">© 2026 PHIN · Personal Health INtelligence · blake@phin.health</div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ n, label }) {
  return (
    <div style={{ display:'inline-flex', alignItems:'baseline', gap:6, padding:'8px 16px', borderRadius:9999, border:'1px solid var(--line)', background:'var(--bg-elev-1)', whiteSpace:'nowrap', flexShrink:0 }}>
      <span style={{ fontFamily:'var(--font-numeric)', fontWeight:800, fontSize:17, color:'var(--ink-hi)' }}>{n}</span>
      <span className="phin-body-sm t-mid">{label}</span>
    </div>
  );
}

function TierCard({ color, name, range, featured }) {
  return (
    <article className="tier-card" data-featured={featured ? 'true' : 'false'} style={{ ['--tc']: color }}>
      <span className="tier-card__dot" />
      <div className="tier-card__body">
        <div className="tier-card__name">{name}</div>
        <div className="tier-card__range">{range}</div>
      </div>
    </article>
  );
}

function Feature({ n, title, body }) {
  return (
    <article className="feature-card">
      <div className="feature-card__n">{n}</div>
      <div className="feature-card__body">
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__desc">{body}</p>
      </div>
    </article>
  );
}

window.Landing = Landing;

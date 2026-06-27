// All 6 survey steps. Each receives (answers, setAnswers, onNext, onBack).

// ─── STEP 01: 성향 진단 ────────────────────────────────
function Step1({ answers, setAnswers, onNext, onBack }) {
  const personality = answers.personality || {};
  const [mode, setMode] = React.useState(answers.mbtiDirect ? 'know' : 'questions');

  const pick = (qid, side) => {
    setAnswers({
      ...answers,
      personality: { ...personality, [qid]: side },
      mbtiDirect: null,
    });
  };

  const pickMbti = (mbti) => {
    setAnswers({
      ...answers,
      personality: {
        EI: mbti[0] === 'E' ? 'A' : 'B',
        SN: mbti[1] === 'S' ? 'A' : 'B',
        TF: mbti[2] === 'T' ? 'A' : 'B',
        JP: mbti[3] === 'J' ? 'A' : 'B',
      },
      mbtiDirect: mbti,
    });
  };

  const switchMode = (m) => {
    setMode(m);
    if (m === 'questions') setAnswers({ ...answers, mbtiDirect: null });
  };

  const done = mode === 'know'
    ? !!answers.mbtiDirect
    : ['EI','SN','TF','JP'].every(k => personality[k]);

  return (
    <StepLayout step={1} total={6} onBack={onBack}
      action={<ActionBar onNext={onNext} disabled={!done}
        hint={done ? '' : (mode === 'know' ? '내 MBTI를 골라주세요' : '4개 모두 골라야 다음으로 넘어갈 수 있어요')} />}
    >
      <StepHeader eyebrow="STEP 01 · 성향 진단" title="나는 어떤 사람인가?"
        subtitle="MBTI를 이미 알면 직접 선택하세요. 모르면 4가지 질문으로 알려드릴게요." />
      <ModeToggle mode={mode} setMode={switchMode} />
      {mode === 'know' ? (
        <MbtiGrid value={answers.mbtiDirect} onPick={pickMbti} />
      ) : (
        <AbQuestions questions={window.PHIN.personalityQs} personality={personality} pick={pick} />
      )}
    </StepLayout>
  );
}

function ModeToggle({ mode, setMode }) {
  const Btn = ({ id, label, sub }) => {
    const sel = mode === id;
    return (
      <button onClick={() => setMode(id)} style={{
        flex: 1, background: sel ? 'var(--brand-mute)' : 'transparent',
        border: `1px solid ${sel ? 'var(--accent)' : 'var(--line)'}`,
        borderRadius: 14, padding: '14px 16px', cursor: 'pointer',
        textAlign: 'left', color: sel ? 'var(--ink-hi)' : 'var(--ink-mid)',
        fontFamily: 'var(--font-body)', transition: 'all 220ms var(--ease)',
      }}>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{label}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-lo)', marginTop: 2 }}>{sub}</div>
      </button>
    );
  };
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
      <Btn id="know" label="이미 알아요" sub="MBTI 직접 선택" />
      <Btn id="questions" label="잘 모르겠어요" sub="질문으로 찾기" />
    </div>
  );
}

function MbtiGrid({ value, onPick }) {
  const types = [
    'INTJ','INTP','ENTJ','ENTP',
    'INFJ','INFP','ENFJ','ENFP',
    'ISTJ','ISFJ','ESTJ','ESFJ',
    'ISTP','ISFP','ESTP','ESFP',
  ];
  return (
    <div className="phin-mbti-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
      {types.map(t => {
        const sel = value === t;
        const dim = !!value && !sel;
        let cls = 'phin-option';
        if (sel) cls += ' is-selected';
        else if (dim) cls += ' is-unselected';
        return (
          <button key={t} className={cls} onClick={() => onPick(t)}
            style={{ padding: '14px 8px', flexDirection: 'column', alignItems: 'center', gap: 4, textAlign: 'center', minHeight: 86 }}>
            <span style={{ fontFamily: 'var(--font-numeric)', fontWeight: 800, fontSize: 16, letterSpacing: '0.04em', lineHeight: 1 }}>{t}</span>
            <span style={{ fontSize: 11, fontWeight: 500, color: sel ? 'var(--ink-mid)' : (dim ? 'var(--ink-xlo)' : 'var(--ink-lo)') }}>
              {window.PHIN.typeNames[t]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function AbQuestions({ questions, personality, pick }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {questions.map((q, i) => {
        const picked = personality[q.id];
        return (
          <div key={q.id}>
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontFamily: 'var(--font-numeric)', fontSize: 12, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: 6 }}>Q{i + 1}</div>
              <div className="phin-h2 t-hi" style={{ fontWeight: 600, wordBreak: 'keep-all', lineHeight: 1.4 }}>{q.q}</div>
            </div>
            <div className="phin-ab-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <ABCard letter="A" label={q.A.label} isSelected={picked === 'A'} isDimmed={picked === 'B'} onClick={() => pick(q.id, 'A')} />
              <ABCard letter="B" label={q.B.label} isSelected={picked === 'B'} isDimmed={picked === 'A'} onClick={() => pick(q.id, 'B')} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── STEP 02: 신체 고민 ──────────────────────────────────
function Step2({ answers, setAnswers, onNext, onBack }) {
  const selected = answers.bodyIssues || [];
  const toggle = (key) => {
    if (key === 'none') {
      // '별로 없음' 선택 시 나머지 전체 취소
      const next = selected.includes('none') ? [] : ['none'];
      setAnswers(prev => ({ ...prev, bodyIssues: next }));
    } else {
      // 다른 항목 선택 시 '별로 없음' 제거
      const filtered = selected.filter(k => k !== 'none');
      const next = filtered.includes(key) ? filtered.filter(k => k !== key) : [...filtered, key];
      setAnswers(prev => ({ ...prev, bodyIssues: next }));
    }
  };
  const hasAny = selected.length > 0;
  return (
    <StepLayout step={2} total={6} onBack={onBack}
      action={<ActionBar onNext={onNext} nextLabel={hasAny ? `${selected.length}개 선택 · 다음` : '해당 없음 · 다음'} />}
    >
      <StepHeader eyebrow="STEP 02 · 신체 고민" title="요즘 내 몸에서 가장 나를 괴롭히는 문제는?"
        subtitle="해당되는 것 모두 골라주세요. 복수 선택 가능." />
      <MultiGrid items={window.PHIN.bodyIssues} selectedKeys={selected} onToggle={toggle} />
    </StepLayout>
  );
}

// ─── STEP 03: 디지털 습관 ────────────────────────────────
function Step3({ answers, setAnswers, onNext, onBack }) {
  const picked = answers.digital;
  const pick = (k) => setAnswers({ ...answers, digital: k });
  return (
    <StepLayout step={3} total={6} onBack={onBack}
      action={<ActionBar onNext={onNext} disabled={!picked} />}
    >
      <StepHeader eyebrow="STEP 03 · 디지털 습관" title="업무 외 스마트폰 하루 사용시간은?"
        subtitle="숏폼, 유튜브, SNS 등 포함. 단일 선택." />
      <SingleList items={window.PHIN.digital} selected={picked} onPick={pick} />
    </StepLayout>
  );
}

// ─── STEP 04: 생활습관 ───────────────────────────────────
function Step4({ answers, setAnswers, onNext, onBack }) {
  const selected = answers.lifestyle || [];
  const toggle = (key) => {
    if (key === 'none') {
      // '해당 없음' 선택 시 나머지 전체 취소
      const next = selected.includes('none') ? [] : ['none'];
      setAnswers(prev => ({ ...prev, lifestyle: next }));
    } else {
      // 다른 항목 선택 시 '해당 없음' 제거
      const filtered = selected.filter(k => k !== 'none');
      const next = filtered.includes(key) ? filtered.filter(k => k !== key) : [...filtered, key];
      setAnswers(prev => ({ ...prev, lifestyle: next }));
    }
  };
  return (
    <StepLayout step={4} total={6} onBack={onBack}
      action={<ActionBar onNext={onNext} nextLabel={selected.length ? `${selected.length}개 선택 · 다음` : '해당 없음 · 다음'} />}
    >
      <StepHeader eyebrow="STEP 04 · 생활습관" title="솔직히 해당되는 것 모두 골라주세요"
        subtitle="많이 골라도 괜찮습니다. 복수 선택 가능." />
      <MultiGrid items={window.PHIN.lifestyle} selectedKeys={selected} onToggle={toggle} />
    </StepLayout>
  );
}

// ─── STEP 05: 하루 걸음수 ────────────────────────────────
function Step5({ answers, setAnswers, onNext, onBack }) {
  const picked = answers.steps;
  const pick = (k) => setAnswers({ ...answers, steps: k });
  return (
    <StepLayout step={5} total={6} onBack={onBack}
      action={<ActionBar onNext={onNext} disabled={!picked} />}
    >
      <StepHeader eyebrow="STEP 05 · 하루 걸음수" title="하루 평균 걸음수는?"
        subtitle="스마트폰 만보계 기준으로 생각해주세요. 단일 선택." />
      <SingleList items={window.PHIN.steps} selected={picked} onPick={pick} />
    </StepLayout>
  );
}

// ─── STEP 06: 기본 스펙 (슬라이더 + 키/몸무게) ────────────
function Step6({ answers, setAnswers, onNext, onBack }) {
  const set = (k, v) => setAnswers(prev => ({ ...prev, [k]: v }));

  // 초기값 — answers에 없으면 기본값으로 즉시 저장
  React.useEffect(() => {
    const updates = {};
    if (answers.ageNum    == null) updates.ageNum    = 35;
    if (answers.heightNum == null) updates.heightNum = 170;
    if (answers.weightNum == null) updates.weightNum = 70;
    if (Object.keys(updates).length > 0) {
      setAnswers(prev => ({ ...prev, ...updates }));
    }
  }, []);

  const gender = answers.gender    || '';
  const age    = answers.ageNum    ?? 35;
  const height = answers.heightNum ?? 170;
  const weight = answers.weightNum ?? 70;

  const bmi = height > 0 ? (weight / Math.pow(height / 100, 2)) : 0;

  const bmiLabel = bmi < 18.5 ? '저체중' : bmi < 23 ? '정상' : bmi < 25 ? '과체중' : bmi < 30 ? '비만' : '고도비만';
  const bmiColor = bmi < 18.5 ? '#2E86C1' : bmi < 23 ? '#1A5C38' : bmi < 25 ? '#E67E22' : '#C0392B';

  const done = gender && age > 0 && height > 0 && weight > 0;

  return (
    <StepLayout step={6} total={6} onBack={onBack}
      action={<ActionBar onNext={onNext} nextLabel="진단 완료 · 결과 보기" disabled={!done}
        hint={done ? '' : '모든 항목을 입력해주세요'} />}
    >
      <StepHeader eyebrow="STEP 06 · 기본 정보" title="마지막으로 기본 정보를 알려주세요"
        subtitle="앱 연동 시 이 정보가 그대로 사용됩니다." />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

        {/* 성별 */}
        <div>
          <div className="phin-h2 t-hi" style={{ marginBottom: 12, fontWeight: 600 }}>성별</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[['male','남성'],['female','여성']].map(([v, l]) => {
              const sel = gender === v;
              return (
                <button key={v} className={`phin-option${sel ? ' is-selected' : (gender ? ' is-unselected' : '')}`}
                  onClick={() => set('gender', v)}
                  style={{ padding: '16px', justifyContent: 'center', fontSize: 15, fontWeight: 600 }}>
                  {l}
                </button>
              );
            })}
          </div>
        </div>

        {/* 나이 슬라이더 */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <div className="phin-h2 t-hi" style={{ fontWeight: 600 }}>나이</div>
            <div style={{ fontFamily: 'var(--font-numeric)', fontSize: 28, fontWeight: 800, color: 'var(--accent)' }}>
              {age}<span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-mid)', marginLeft: 4 }}>세</span>
            </div>
          </div>
          <input type="range" min={15} max={80} value={age}
            onChange={e => set('ageNum', +e.target.value)}
            style={{ width: '100%', accentColor: 'var(--accent)', height: 6, cursor: 'pointer' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span className="phin-caption t-lo">15세</span>
            <span className="phin-caption t-lo">80세</span>
          </div>
        </div>

        {/* 키 슬라이더 */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <div className="phin-h2 t-hi" style={{ fontWeight: 600 }}>키</div>
            <div style={{ fontFamily: 'var(--font-numeric)', fontSize: 28, fontWeight: 800, color: 'var(--accent)' }}>
              {height}<span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-mid)', marginLeft: 4 }}>cm</span>
            </div>
          </div>
          <input type="range" min={140} max={200} value={height}
            onChange={e => set('heightNum', +e.target.value)}
            style={{ width: '100%', accentColor: 'var(--accent)', height: 6, cursor: 'pointer' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span className="phin-caption t-lo">140cm</span>
            <span className="phin-caption t-lo">200cm</span>
          </div>
        </div>

        {/* 몸무게 슬라이더 */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <div className="phin-h2 t-hi" style={{ fontWeight: 600 }}>체중</div>
            <div style={{ fontFamily: 'var(--font-numeric)', fontSize: 28, fontWeight: 800, color: 'var(--accent)' }}>
              {weight}<span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-mid)', marginLeft: 4 }}>kg</span>
            </div>
          </div>
          <input type="range" min={35} max={150} value={weight}
            onChange={e => set('weightNum', +e.target.value)}
            style={{ width: '100%', accentColor: 'var(--accent)', height: 6, cursor: 'pointer' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span className="phin-caption t-lo">35kg</span>
            <span className="phin-caption t-lo">150kg</span>
          </div>
        </div>

        {/* BMI 실시간 카드 */}
        {height > 0 && weight > 0 && (
          <div style={{
            background: `${bmiColor}18`,
            border: `1px solid ${bmiColor}44`,
            borderRadius: 14, padding: '14px 18px',
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{ fontFamily: 'var(--font-numeric)', fontSize: 32, fontWeight: 800, color: bmiColor }}>
              {bmi.toFixed(1)}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: bmiColor }}>{bmiLabel}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-lo)', marginTop: 2 }}>
                {age}세 · {height}cm · {weight}kg
              </div>
            </div>
          </div>
        )}

      </div>
    </StepLayout>
  );
}

// ───────── Helpers ─────────────────────────────────────────

function MultiGrid({ items, selectedKeys, onToggle }) {
  const anySelected = selectedKeys.length > 0;
  return (
    <div className="phin-multi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
      {items.map(it => {
        const sel = selectedKeys.includes(it.key);
        return (
          <OptionTile key={it.key} icon={it.icon} label={it.label} desc={it.desc}
            isSelected={sel} isDimmed={anySelected && !sel} onClick={() => onToggle(it.key)} />
        );
      })}
    </div>
  );
}

function SingleList({ items, selected, onPick }) {
  const anySelected = !!selected;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map(it => {
        const sel = selected === it.key;
        return (
          <OptionTile key={it.key} icon={it.icon} label={it.label} desc={it.desc}
            isSelected={sel} isDimmed={anySelected && !sel} onClick={() => onPick(it.key)} />
        );
      })}
    </div>
  );
}

Object.assign(window, { Step1, Step2, Step3, Step4, Step5, Step6 });

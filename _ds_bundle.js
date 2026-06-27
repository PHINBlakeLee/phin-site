/* @ds-bundle: {"format":3,"namespace":"WiseDesignSystem_8d4467","components":[],"sourceHashes":{"src/Landing.jsx":"8c740fb48d25","src/Result.jsx":"d56a56aece8b","src/Shared.jsx":"e92f4f866d06","src/Steps.jsx":"38afdef9d321","src/scoring.js":"857f65ea7796","src/tweaks-panel.jsx":"22c052960f83"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WiseDesignSystem_8d4467 = window.WiseDesignSystem_8d4467 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// src/Landing.jsx
try { (() => {
// Landing page — hero, value prop, "당신은 핀인가?" slogan, start CTA.

function Landing({
  onStart
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(11, 15, 13, 0.78)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-container",
    style: {
      height: 64,
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 22
  }), /*#__PURE__*/React.createElement("nav", {
    className: "phin-nav-desktop",
    style: {
      display: 'flex',
      gap: 24,
      marginLeft: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "phin-body-sm t-mid",
    style: {
      textDecoration: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "\uC11C\uBE44\uC2A4"), /*#__PURE__*/React.createElement("a", {
    className: "phin-body-sm t-mid",
    style: {
      textDecoration: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "PHIN\uC2A4\uCF54\uC5B4"), /*#__PURE__*/React.createElement("a", {
    className: "phin-body-sm t-mid",
    style: {
      textDecoration: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "\uD2F0\uC5B4"), /*#__PURE__*/React.createElement("a", {
    className: "phin-body-sm t-mid",
    style: {
      textDecoration: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "\uD074\uB7FD")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("a", {
    className: "phin-body-sm t-mid phin-nav-desktop",
    style: {
      textDecoration: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "\uC571 \uB2E4\uC6B4\uB85C\uB4DC"), /*#__PURE__*/React.createElement("button", {
    className: "phin-btn phin-btn-primary",
    onClick: onStart,
    style: {
      padding: '10px 18px',
      fontSize: 14
    }
  }, "\uC9C4\uB2E8 \uC2DC\uC791"))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 96,
      paddingBottom: 64,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      height: 600,
      background: 'radial-gradient(60% 80% at 50% 100%, rgba(57,255,106,0.10), transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "phin-container",
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-badge phin-badge-brand",
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: 'var(--accent)'
    }
  }), "Salus Omnibus \xB7 \uBAA8\uB450\uB97C \uC704\uD55C \uAC74\uAC15"), /*#__PURE__*/React.createElement("h1", {
    className: "phin-hero"
  }, "\uB2F9\uC2E0\uC740 ", /*#__PURE__*/React.createElement("span", {
    className: "phin-serif",
    style: {
      color: 'var(--accent)',
      fontWeight: 300
    }
  }, "\uD540"), "\uC778\uAC00,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-mid)'
    }
  }, "\uC544\uB2CC\uAC00?")), /*#__PURE__*/React.createElement("p", {
    className: "phin-body-lg t-mid",
    style: {
      marginTop: 28,
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 540
    }
  }, "6\uAC00\uC9C0 \uC9C8\uBB38\uC73C\uB85C \uC0B0\uCD9C\uB418\uB294 PHIN\uC2A4\uCF54\uC5B4. \uB2F9\uC2E0\uC758 \uC2E0\uCCB4\uB098\uC774, \uB3D9\uB144\uBC30 \uBE44\uAD50, \uADF8\uB9AC\uACE0 \uC5B4\uB5A4 \uD540(PHIN) \uC720\uD615\uC778\uC9C0 30\uCD08 \uC548\uC5D0 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "phin-btn phin-btn-primary",
    onClick: onStart
  }, "\uBB34\uB8CC \uC9C4\uB2E8 \uC2DC\uC791\uD558\uAE30", /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "phin-btn phin-btn-secondary"
  }, "\uC5B4\uB5BB\uAC8C \uC0B0\uCD9C\uB418\uB098\uC694?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      justifyContent: 'center',
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "30\uCD08",
    label: "\uC5D0 \uC9C4\uB2E8 \uC644\uB8CC"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "6\uB2E8\uACC4",
    label: "\uC124\uBB38"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "16\uAC00\uC9C0",
    label: "\uC131\uD5A5 \uC720\uD615"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "0~100",
    label: "PHIN\uC2A4\uCF54\uC5B4"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-micro",
    style: {
      color: 'var(--accent)',
      textAlign: 'center',
      marginBottom: 16
    }
  }, "PHIN \uD2F0\uC5B4 \uC2DC\uC2A4\uD15C"), /*#__PURE__*/React.createElement("h2", {
    className: "phin-display-md t-hi",
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, "5\uAC00\uC9C0 \uB4F1\uAE09, \uC810\uC218\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 12
    },
    className: "phin-tier-grid"
  }, /*#__PURE__*/React.createElement(TierCard, {
    color: "#888888",
    name: "GRAY",
    range: "0\u201334"
  }), /*#__PURE__*/React.createElement(TierCard, {
    color: "#ff4a4a",
    name: "RED",
    range: "35\u201349"
  }), /*#__PURE__*/React.createElement(TierCard, {
    color: "#f5c518",
    name: "YELLOW",
    range: "50\u201364"
  }), /*#__PURE__*/React.createElement(TierCard, {
    color: "#4a9eff",
    name: "BLUE",
    range: "65\u201379"
  }), /*#__PURE__*/React.createElement(TierCard, {
    color: "#39ff6a",
    name: "GREEN",
    range: "80\u2013100",
    featured: true
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    },
    className: "phin-feature-grid"
  }, /*#__PURE__*/React.createElement(Feature, {
    n: "01",
    title: "PHIN\uC2A4\uCF54\uC5B4",
    body: "6\uAC1C \uC601\uC5ED \uC885\uD569 \uC810\uC218. \uB3D9\uB144\uBC30 \uB300\uBE44 \uC5B4\uB514\uCBE4\uC778\uC9C0 \uBC31\uBD84\uC704\uB85C \uBE44\uAD50\uB429\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement(Feature, {
    n: "02",
    title: "\uC2E0\uCCB4\uB098\uC774",
    body: "\uC2E4\uC81C \uB098\uC774\uAC00 \uC544\uB2CC, \uC0DD\uD65C\uC2B5\uAD00\uC774 \uB9CC\uB4E0 \uC9C4\uC9DC \uB098\uC774. \uD3C9\uADE0 4~7\uC138 \uCC28\uC774\uAC00 \uB0A9\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement(Feature, {
    n: "03",
    title: "16\uAC00\uC9C0 \uC131\uD5A5",
    body: "MBTI \uAE30\uBC18 \uAC74\uAC15 \uD589\uB3D9 \uC720\uD615. \uAC19\uC740 \uC810\uC218\uB77C\uB3C4 \uCF54\uCE6D \uD1A4\uC774 \uB2EC\uB77C\uC9D1\uB2C8\uB2E4."
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-container-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-card",
    style: {
      textAlign: 'center',
      padding: 48,
      border: '1px solid var(--line-strong)',
      background: 'linear-gradient(180deg, var(--bg-elev-1), var(--bg))'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "phin-display-md t-hi",
    style: {
      marginBottom: 16
    }
  }, "\uB108 PHIN \uBA87 \uC810\uC774\uC57C?"), /*#__PURE__*/React.createElement("p", {
    className: "phin-body-lg t-mid",
    style: {
      marginBottom: 32
    }
  }, "\uC77C\uC0C1 \uC778\uC0AC\uAC00 \uB420 \uB9CC\uD07C \uC815\uD655\uD55C \uAC74\uAC15 \uC9C0\uD45C. \uC9C0\uAE08 \uCE21\uC815\uD574\uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement("button", {
    className: "phin-btn phin-btn-primary",
    onClick: onStart
  }, "\uC9C0\uAE08 \uC2DC\uC791\uD558\uAE30 \u2014 30\uCD08")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--line)',
      padding: '32px 0',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 16
  }), /*#__PURE__*/React.createElement("div", {
    className: "phin-caption t-lo"
  }, "\xA9 2026 PHIN \xB7 Personal Health INtelligence \xB7 blake@phin.health"))));
}
function Stat({
  n,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 6,
      padding: '8px 16px',
      borderRadius: 9999,
      border: '1px solid var(--line)',
      background: 'var(--bg-elev-1)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontWeight: 800,
      fontSize: 17,
      color: 'var(--ink-hi)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "phin-body-sm t-mid"
  }, label));
}
function TierCard({
  color,
  name,
  range,
  featured
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "tier-card",
    "data-featured": featured ? 'true' : 'false',
    style: {
      ['--tc']: color
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tier-card__dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tier-card__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tier-card__name"
  }, name, " PHIN"), /*#__PURE__*/React.createElement("div", {
    className: "tier-card__range"
  }, "SCORE ", range)));
}
function Feature({
  n,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "feature-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-card__n"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "feature-card__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "feature-card__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "feature-card__desc"
  }, body)));
}
window.Landing = Landing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/Landing.jsx", error: String((e && e.message) || e) }); }

// src/Result.jsx
try { (() => {
// Result page — 스코어 결과 + Supabase 저장 + 앱 연결
// window.PHIN.score()는 src/scoring.js의 앱 공식 사용

const SUPABASE_URL = 'https://ytseevffdonnfxcgfzxe.supabase.co';
const SUPABASE_KEY = window.__PHIN_SUPABASE_KEY__ || '';
async function saveToSupabase(raw, email) {
  if (!SUPABASE_KEY) return null;
  try {
    const token = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36);
    const payload = {
      ...raw,
      email: email || null,
      token,
      transferred: false
    };
    const res = await fetch(`${SUPABASE_URL}/rest/v1/web_sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(await res.text());
    return token;
  } catch (e) {
    console.warn('Supabase 저장 오류 (무시):', e);
    return null;
  }
}
function Result({
  answers,
  onRestart
}) {
  const r = window.PHIN.score(answers);
  const tierColor = r.tier.color;
  const tierGlow = tierColor + '33';
  const [email, setEmail] = React.useState('');
  const [saved, setSaved] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const [showEmail, setShowEmail] = React.useState(false);

  // 결과 화면 진입 시 자동 저장 (이메일 없이 점수만)
  React.useEffect(() => {
    if (window.PHIN._lastRaw && SUPABASE_KEY) {
      saveToSupabase(window.PHIN._lastRaw, null).then(t => {
        if (t) setToken(t);
      });
    }
  }, []);
  const handleEmailSave = async () => {
    if (!email || saving) return;
    setSaving(true);
    const t = await saveToSupabase(window.PHIN._lastRaw, email);
    if (t) {
      setToken(t);
      setSaved(true);
    }
    setSaving(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(10,15,12,0.8)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-container",
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onRestart,
    className: "phin-btn-ghost",
    style: {
      background: 'transparent',
      border: 0,
      padding: '8px 10px',
      color: 'var(--ink-mid)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 3-6.7L3 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v5h5"
  })), "\uB2E4\uC2DC \uC9C4\uB2E8"))), /*#__PURE__*/React.createElement("main", {
    className: "phin-container-sm",
    style: {
      paddingTop: 64,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: '-20% -20% auto -20%',
      height: 500,
      background: `radial-gradient(50% 60% at 50% 40%, ${tierGlow}, transparent 70%)`,
      pointerEvents: 'none',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-micro",
    style: {
      color: 'var(--ink-mid)',
      marginBottom: 16
    }
  }, "YOUR PHIN SCORE"), /*#__PURE__*/React.createElement("div", {
    className: "phin-score",
    style: {
      color: tierColor
    }
  }, r.score), /*#__PURE__*/React.createElement("div", {
    className: "phin-body t-lo",
    style: {
      fontFamily: 'var(--font-numeric)',
      fontWeight: 600,
      letterSpacing: '0.04em'
    }
  }, "/ 100"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 24px',
      borderRadius: 9999,
      background: 'var(--bg-elev-1)',
      border: `1px solid ${tierColor}`,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 9999,
      background: tierColor,
      boxShadow: `0 0 16px ${tierColor}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--ink-hi)',
      letterSpacing: '-0.02em',
      whiteSpace: 'nowrap'
    }
  }, r.tier.name)))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    },
    className: "phin-insight-grid"
  }, /*#__PURE__*/React.createElement(InsightCard, {
    eyebrow: "\uC131\uD5A5 \uC720\uD615",
    big: r.mbti,
    small: r.typeName
  }), /*#__PURE__*/React.createElement(InsightCard, {
    eyebrow: "\uC2E0\uCCB4\uB098\uC774",
    big: `${r.bodyAge}세`,
    small: `실제 ${r.realAge}세 · ${r.bodyAge - r.realAge > 0 ? '+' : ''}${r.bodyAge - r.realAge}세`,
    tone: r.bodyAge > r.realAge ? 'warn' : 'good'
  }), /*#__PURE__*/React.createElement(InsightCard, {
    eyebrow: "\uB3D9\uB144\uBC30 \uBE44\uAD50",
    big: r.percentile,
    small: `${answers.age || ''} ${answers.gender || ''} 기준`
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-micro",
    style: {
      color: 'var(--accent)',
      marginBottom: 16
    }
  }, "1\uCC28 \uBD84\uC11D \uB9AC\uD3EC\uD2B8"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, r.oneLiners.map((line, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      color: 'var(--ink-hi)',
      fontSize: 15,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: 8,
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", null, line)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-micro t-mid",
    style: {
      marginBottom: 16
    }
  }, "\uD2F0\uC5B4 \uC0AC\uB2E4\uB9AC"), /*#__PURE__*/React.createElement(TierLadder, {
    current: r.tier.key,
    score: r.score
  }), /*#__PURE__*/React.createElement("p", {
    className: "phin-body-sm t-mid",
    style: {
      marginTop: 16
    }
  }, "\uB9DE\uCDA4 \uCF54\uCE6D\uC744 \uD55C \uB2EC\uB9CC \uB530\uB77C\uAC00\uBA74 \uD3C9\uADE0 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)'
    }
  }, "2~6\uD3EC\uC778\uD2B8"), " \uC0C1\uC2B9. \uC2DD\uB2E8\uC744 \uBCD1\uD589\uD558\uBA74 \uCD5C\uB300 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)'
    }
  }, "10\uD3EC\uC778\uD2B8"), "\uAE4C\uC9C0 \uC62C\uB77C\uAC11\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-card",
    style: {
      border: '1px solid var(--line-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-micro",
    style: {
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "\uD83D\uDCF1 \uC571\uC5D0\uC11C \uC774\uC5B4\uC11C \uBCF4\uAE30"), /*#__PURE__*/React.createElement("p", {
    className: "phin-body-sm t-mid",
    style: {
      marginBottom: 16
    }
  }, "\uC774\uBA54\uC77C\uC744 \uB4F1\uB85D\uD558\uBA74 \uC571 \uC124\uCE58 \uD6C4 \uAC19\uC740 \uC774\uBA54\uC77C\uB85C \uB85C\uADF8\uC778\uD560 \uB54C", /*#__PURE__*/React.createElement("br", null), "\uC9C0\uAE08 \uC785\uB825\uD55C \uC815\uBCF4\uAC00 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink-hi)'
    }
  }, "\uC790\uB3D9\uC73C\uB85C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4."), " \uB2E4\uC2DC \uC785\uB825\uD560 \uD544\uC694 \uC5C6\uC5B4\uC694."), saved ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand-mute)',
      border: '1px solid var(--accent)',
      borderRadius: 12,
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontSize: 18
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-hi)',
      fontWeight: 600,
      fontSize: 14
    }
  }, "\uB4F1\uB85D \uC644\uB8CC!"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-mid)',
      fontSize: 12,
      marginTop: 2
    }
  }, "\uC571 \uC124\uCE58 \uD6C4 ", /*#__PURE__*/React.createElement("b", null, email), "\uB85C \uB85C\uADF8\uC778\uD558\uBA74 \uC790\uB3D9 \uC5F0\uACB0\uB429\uB2C8\uB2E4."))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "\uC774\uBA54\uC77C \uC8FC\uC18C \uC785\uB825",
    value: email,
    onChange: e => setEmail(e.target.value),
    onKeyDown: e => e.key === 'Enter' && handleEmailSave(),
    style: {
      flex: 1,
      padding: '12px 16px',
      background: 'var(--bg-elev-2)',
      border: '1px solid var(--line-strong)',
      borderRadius: 10,
      color: 'var(--ink-hi)',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "phin-btn phin-btn-primary",
    onClick: handleEmailSave,
    disabled: !email || saving,
    style: {
      padding: '12px 20px',
      fontSize: 14,
      whiteSpace: 'nowrap'
    }
  }, saving ? '저장 중…' : '앱 연결')))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-card",
    style: {
      position: 'relative',
      overflow: 'hidden',
      border: '1px dashed var(--line-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-micro",
    style: {
      color: 'var(--ink-lo)',
      marginBottom: 16
    }
  }, "\uD83D\uDD12 \uC571\uC5D0\uC11C\uB9CC \uC5F4\uB78C \uAC00\uB2A5"), /*#__PURE__*/React.createElement("h3", {
    className: "phin-display-sm t-hi",
    style: {
      marginBottom: 8
    }
  }, "\uC815\uBC00 \uCF54\uCE6D \uB9AC\uD3EC\uD2B8 + \uB9E4\uC77C \uB9DE\uCDA4 \uC6B4\uB3D9"), /*#__PURE__*/React.createElement("p", {
    className: "phin-body t-mid",
    style: {
      marginBottom: 0,
      maxWidth: 480
    }
  }, "\uC8FC\uAC04\xB7\uC6D4\uAC04 PHIN\uC2A4\uCF54\uC5B4 \uCD94\uC774, \uBD80\uC704\uBCC4 \uC2E0\uCCB4 \uB300\uC2DC\uBCF4\uB4DC, \uB9E4\uC77C \uB2E4\uB978 \uB9DE\uCDA4 \uC6B4\uB3D9, PHIN \uCF54\uCE58\uC640\uC758 1:1 \uD53C\uB4DC\uBC31 \u2014 \uC571 \uB2E4\uC6B4\uB85C\uB4DC \uC2DC \uC7A0\uAE08 \uD574\uC81C\uB429\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto -10% -50% auto',
      width: 280,
      height: 280,
      background: 'radial-gradient(circle, var(--brand-glow), transparent 70%)',
      pointerEvents: 'none'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "phin-btn phin-btn-primary",
    style: {
      width: '100%',
      padding: '18px 24px'
    },
    onClick: () => window.open('https://play.google.com/store/apps/details?id=health.phin', '_blank')
  }, "\uC571 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uACE0 \uC804\uCCB4 \uB9AC\uD3EC\uD2B8 \uBCF4\uAE30"), /*#__PURE__*/React.createElement("button", {
    className: "phin-btn phin-btn-secondary",
    style: {
      width: '100%'
    },
    onClick: () => {
      const text = `내 PHIN스코어는 ${r.score}점 (${r.tier.name})! 신체나이 ${r.bodyAge}세. 너는 몇 점이야? phin.health`;
      if (navigator.share) navigator.share({
        text
      });else {
        navigator.clipboard.writeText(text);
        alert('클립보드에 복사됐어요!');
      }
    }
  }, "\uACB0\uACFC \uACF5\uC720\uD558\uAE30 \u2014 \uCE5C\uAD6C \uC810\uC218\uC640 \uBE44\uAD50"), /*#__PURE__*/React.createElement("div", {
    className: "phin-caption t-lo",
    style: {
      textAlign: 'center',
      marginTop: 8
    }
  }, "\uCE74\uCE74\uC624 \xB7 \uC778\uC2A4\uD0C0 \uACF5\uC720\uB85C \uCE5C\uAD6C PHIN\uC2A4\uCF54\uC5B4\uC640 \uBE44\uAD50\uD574\uBCF4\uC138\uC694"))));
}
function InsightCard({
  eyebrow,
  big,
  small,
  tone
}) {
  const color = tone === 'good' ? 'var(--accent)' : tone === 'warn' ? 'var(--tier-yellow)' : 'var(--ink-hi)';
  return /*#__PURE__*/React.createElement("div", {
    className: "phin-card",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minHeight: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-micro t-lo"
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: '-0.02em',
      color,
      lineHeight: 1.1,
      marginTop: 8
    }
  }, big), /*#__PURE__*/React.createElement("div", {
    className: "phin-body-sm t-mid",
    style: {
      marginTop: 4
    }
  }, small));
}
function TierLadder({
  current,
  score
}) {
  const tiers = [{
    key: 'gray',
    name: 'GRAY',
    range: [0, 34],
    color: '#888888'
  }, {
    key: 'red',
    name: 'RED',
    range: [35, 49],
    color: '#ff4a4a'
  }, {
    key: 'yellow',
    name: 'YELLOW',
    range: [50, 64],
    color: '#f5c518'
  }, {
    key: 'blue',
    name: 'BLUE',
    range: [65, 79],
    color: '#4a9eff'
  }, {
    key: 'green',
    name: 'GREEN',
    range: [80, 100],
    color: '#39ff6a'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    },
    className: "phin-ladder"
  }, tiers.map(t => {
    const active = t.key === current;
    return /*#__PURE__*/React.createElement("div", {
      key: t.key,
      style: {
        flex: 1,
        borderRadius: 10,
        border: active ? `1px solid ${t.color}` : '1px solid var(--line)',
        background: active ? `${t.color}18` : 'transparent',
        padding: '12px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        opacity: active ? 1 : 0.55,
        transition: 'opacity 220ms var(--ease)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 9999,
        background: t.color,
        boxShadow: active ? `0 0 12px ${t.color}` : 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 12,
        fontWeight: 800,
        color: active ? 'var(--ink-hi)' : 'var(--ink-mid)',
        letterSpacing: '-0.01em'
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-numeric)',
        fontSize: 10,
        color: 'var(--ink-lo)'
      }
    }, t.range[0], "\u2013", t.range[1]));
  }));
}
window.Result = Result;
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/Result.jsx", error: String((e && e.message) || e) }); }

// src/Shared.jsx
try { (() => {
// Shared chrome — header, progress bar, footer, option tiles.
// All step screens compose these.

function Logo({
  size = 22
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 0,
      fontFamily: 'var(--font-display)',
      fontSize: size,
      fontWeight: 900,
      letterSpacing: '-0.04em',
      color: 'var(--ink-hi)',
      lineHeight: 1
    }
  }, "PHi", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "N"));
}
function TopBar({
  step,
  total,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(10, 15, 12, 0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phin-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "phin-btn-ghost",
    style: {
      background: 'transparent',
      border: 0,
      padding: '8px 10px',
      color: 'var(--ink-mid)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  })), "\uB4A4\uB85C"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Logo, {
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "phin-micro",
    style: {
      color: 'var(--ink-mid)',
      whiteSpace: 'nowrap'
    }
  }, "STEP ", String(step).padStart(2, '0'), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-lo)'
    }
  }, "/ ", String(total).padStart(2, '0')))), /*#__PURE__*/React.createElement(ProgressBar, {
    value: step / total
  }));
}
function ProgressBar({
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--line)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${value * 100}%`,
      background: 'var(--accent)',
      transition: 'width 360ms var(--ease)'
    }
  }));
}
function StepHeader({
  eyebrow,
  title,
  subtitle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "phin-micro",
    style: {
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "phin-display-lg t-hi",
    style: {
      marginBottom: 12
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "phin-body-lg t-mid",
    style: {
      maxWidth: 520,
      margin: 0
    }
  }, subtitle));
}

// Bottom-fixed action bar — Next button + footnote
function ActionBar({
  onNext,
  nextLabel = '다음',
  disabled = false,
  hint
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      background: 'linear-gradient(to top, var(--bg) 60%, rgba(10,15,12,0))',
      paddingTop: 32,
      paddingBottom: 24,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "phin-btn phin-btn-primary",
    onClick: onNext,
    disabled: disabled,
    style: {
      minWidth: 220
    }
  }, nextLabel, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }))), hint && /*#__PURE__*/React.createElement("div", {
    className: "phin-caption t-lo"
  }, hint)));
}

// Option — the signature interaction.
// Pass `selectedKey` (single) or `selectedKeys` (array, for multi).
function OptionTile({
  icon,
  label,
  desc,
  isSelected,
  isDimmed,
  onClick
}) {
  let cls = 'phin-option';
  if (isSelected) cls += ' is-selected';else if (isDimmed) cls += ' is-unselected';
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    onClick: onClick
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      lineHeight: 1,
      flexShrink: 0,
      width: 36,
      height: 36,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      filter: isSelected ? 'none' : isDimmed ? 'saturate(0.4) opacity(0.55)' : 'saturate(0.8)',
      transition: 'filter 220ms var(--ease)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", null, label), desc && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: isSelected ? 'var(--ink-mid)' : isDimmed ? 'var(--ink-xlo)' : 'var(--ink-lo)'
    }
  }, desc)), isSelected && /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })));
}

// A/B card — bigger tap targets for Step 1.
function ABCard({
  letter,
  label,
  isSelected,
  isDimmed,
  onClick
}) {
  let cls = 'phin-option';
  if (isSelected) cls += ' is-selected';else if (isDimmed) cls += ' is-unselected';
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    onClick: onClick,
    style: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 12,
      padding: 24,
      minHeight: 130,
      textAlign: 'left',
      wordBreak: 'keep-all'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: 9999,
      background: isSelected ? 'var(--accent)' : 'var(--bg-elev-2)',
      color: isSelected ? '#03210f' : 'var(--ink-mid)',
      fontFamily: 'var(--font-numeric)',
      fontWeight: 800,
      fontSize: 13
    }
  }, letter), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      lineHeight: 1.35
    }
  }, label));
}

// Layout wrapper used by every step.
function StepLayout({
  step,
  total,
  onBack,
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    step: step,
    total: total,
    onBack: onBack
  }), /*#__PURE__*/React.createElement("main", {
    className: "phin-container-sm",
    style: {
      paddingTop: 56,
      paddingBottom: 32,
      flex: 1
    }
  }, children), action);
}
Object.assign(window, {
  Logo,
  TopBar,
  ProgressBar,
  StepHeader,
  ActionBar,
  OptionTile,
  ABCard,
  StepLayout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/Shared.jsx", error: String((e && e.message) || e) }); }

// src/Steps.jsx
try { (() => {
// All 6 survey steps. Each receives (answers, setAnswers, onNext, onBack).

// ─── STEP 01: 성향 진단 ────────────────────────────────
function Step1({
  answers,
  setAnswers,
  onNext,
  onBack
}) {
  const personality = answers.personality || {};
  const [mode, setMode] = React.useState(answers.mbtiDirect ? 'know' : 'questions');
  const pick = (qid, side) => {
    setAnswers({
      ...answers,
      personality: {
        ...personality,
        [qid]: side
      },
      mbtiDirect: null // clear direct pick if user answers questions
    });
  };
  const pickMbti = mbti => {
    setAnswers({
      ...answers,
      personality: {
        EI: mbti[0] === 'E' ? 'A' : 'B',
        SN: mbti[1] === 'S' ? 'A' : 'B',
        TF: mbti[2] === 'T' ? 'A' : 'B',
        JP: mbti[3] === 'J' ? 'A' : 'B'
      },
      mbtiDirect: mbti
    });
  };
  const switchMode = m => {
    setMode(m);
    if (m === 'questions') {
      // clear direct so user starts fresh on questions
      setAnswers({
        ...answers,
        mbtiDirect: null
      });
    }
  };
  const done = mode === 'know' ? !!answers.mbtiDirect : ['EI', 'SN', 'TF', 'JP'].every(k => personality[k]);
  return /*#__PURE__*/React.createElement(StepLayout, {
    step: 1,
    total: 6,
    onBack: onBack,
    action: /*#__PURE__*/React.createElement(ActionBar, {
      onNext: onNext,
      disabled: !done,
      hint: done ? '' : mode === 'know' ? '내 MBTI를 골라주세요' : '4개 모두 골라야 다음으로 넘어갈 수 있어요'
    })
  }, /*#__PURE__*/React.createElement(StepHeader, {
    eyebrow: "STEP 01 \xB7 \uC131\uD5A5 \uC9C4\uB2E8",
    title: "\uB098\uB294 \uC5B4\uB5A4 \uC0AC\uB78C\uC778\uAC00?",
    subtitle: "MBTI\uB97C \uC774\uBBF8 \uC54C\uBA74 \uC9C1\uC811 \uC120\uD0DD\uD558\uC138\uC694. \uBAA8\uB974\uBA74 4\uAC00\uC9C0 \uC9C8\uBB38\uC73C\uB85C \uC54C\uB824\uB4DC\uB9B4\uAC8C\uC694."
  }), /*#__PURE__*/React.createElement(ModeToggle, {
    mode: mode,
    setMode: switchMode
  }), mode === 'know' ? /*#__PURE__*/React.createElement(MbtiGrid, {
    value: answers.mbtiDirect,
    onPick: pickMbti
  }) : /*#__PURE__*/React.createElement(AbQuestions, {
    questions: window.PHIN.personalityQs,
    personality: personality,
    pick: pick
  }));
}
function ModeToggle({
  mode,
  setMode
}) {
  const Btn = ({
    id,
    label,
    sub
  }) => {
    const sel = mode === id;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => setMode(id),
      style: {
        flex: 1,
        background: sel ? 'var(--brand-mute)' : 'transparent',
        border: `1px solid ${sel ? 'var(--accent)' : 'var(--line)'}`,
        borderRadius: 14,
        padding: '14px 16px',
        cursor: 'pointer',
        textAlign: 'left',
        color: sel ? 'var(--ink-hi)' : 'var(--ink-mid)',
        fontFamily: 'var(--font-body)',
        transition: 'all 220ms var(--ease)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-lo)',
        marginTop: 2
      }
    }, sub));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    id: "know",
    label: "\uC774\uBBF8 \uC54C\uC544\uC694",
    sub: "MBTI \uC9C1\uC811 \uC120\uD0DD"
  }), /*#__PURE__*/React.createElement(Btn, {
    id: "questions",
    label: "\uC798 \uBAA8\uB974\uACA0\uC5B4\uC694",
    sub: "\uC9C8\uBB38\uC73C\uB85C \uCC3E\uAE30"
  }));
}
function MbtiGrid({
  value,
  onPick
}) {
  // Stable order — analysts/diplomats/sentinels/explorers grouping
  const types = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'];
  return /*#__PURE__*/React.createElement("div", {
    className: "phin-mbti-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8
    }
  }, types.map(t => {
    const sel = value === t;
    const dim = !!value && !sel;
    let cls = 'phin-option';
    if (sel) cls += ' is-selected';else if (dim) cls += ' is-unselected';
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      className: cls,
      onClick: () => onPick(t),
      style: {
        padding: '14px 8px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        textAlign: 'center',
        minHeight: 86
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-numeric)',
        fontWeight: 800,
        fontSize: 16,
        letterSpacing: '0.04em',
        lineHeight: 1
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 500,
        color: sel ? 'var(--ink-mid)' : dim ? 'var(--ink-xlo)' : 'var(--ink-lo)'
      }
    }, window.PHIN.typeNames[t]));
  }));
}
function AbQuestions({
  questions,
  personality,
  pick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, questions.map((q, i) => {
    const picked = personality[q.id];
    return /*#__PURE__*/React.createElement("div", {
      key: q.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-numeric)',
        fontSize: 12,
        fontWeight: 700,
        color: 'var(--accent)',
        letterSpacing: '0.08em',
        marginBottom: 6
      }
    }, "Q", i + 1), /*#__PURE__*/React.createElement("div", {
      className: "phin-h2 t-hi",
      style: {
        fontWeight: 600,
        wordBreak: 'keep-all',
        lineHeight: 1.4
      }
    }, q.q)), /*#__PURE__*/React.createElement("div", {
      className: "phin-ab-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(ABCard, {
      letter: "A",
      label: q.A.label,
      isSelected: picked === 'A',
      isDimmed: picked === 'B',
      onClick: () => pick(q.id, 'A')
    }), /*#__PURE__*/React.createElement(ABCard, {
      letter: "B",
      label: q.B.label,
      isSelected: picked === 'B',
      isDimmed: picked === 'A',
      onClick: () => pick(q.id, 'B')
    })));
  }));
}

// ─── STEP 02: 신체 고민 (multi) ──────────────────────
function Step2({
  answers,
  setAnswers,
  onNext,
  onBack
}) {
  const selected = answers.bodyIssues || [];
  const toggle = key => {
    const next = selected.includes(key) ? selected.filter(k => k !== key) : [...selected, key];
    setAnswers({
      ...answers,
      bodyIssues: next
    });
  };
  const hasAny = selected.length > 0;
  return /*#__PURE__*/React.createElement(StepLayout, {
    step: 2,
    total: 6,
    onBack: onBack,
    action: /*#__PURE__*/React.createElement(ActionBar, {
      onNext: onNext,
      nextLabel: hasAny ? `${selected.length}개 선택 · 다음` : '해당 없음 · 다음'
    })
  }, /*#__PURE__*/React.createElement(StepHeader, {
    eyebrow: "STEP 02 \xB7 \uC2E0\uCCB4 \uACE0\uBBFC",
    title: "\uC694\uC998 \uB0B4 \uBAB8\uC5D0\uC11C \uAC00\uC7A5 \uB098\uB97C \uAD34\uB86D\uD788\uB294 \uBB38\uC81C\uB294?",
    subtitle: "\uD574\uB2F9\uB418\uB294 \uAC83 \uBAA8\uB450 \uACE8\uB77C\uC8FC\uC138\uC694. \uBCF5\uC218 \uC120\uD0DD \uAC00\uB2A5."
  }), /*#__PURE__*/React.createElement(MultiGrid, {
    items: window.PHIN.bodyIssues,
    selectedKeys: selected,
    onToggle: toggle
  }));
}

// ─── STEP 03: 디지털 습관 (single) ───────────────────
function Step3({
  answers,
  setAnswers,
  onNext,
  onBack
}) {
  const picked = answers.digital;
  const pick = k => setAnswers({
    ...answers,
    digital: k
  });
  return /*#__PURE__*/React.createElement(StepLayout, {
    step: 3,
    total: 6,
    onBack: onBack,
    action: /*#__PURE__*/React.createElement(ActionBar, {
      onNext: onNext,
      disabled: !picked
    })
  }, /*#__PURE__*/React.createElement(StepHeader, {
    eyebrow: "STEP 03 \xB7 \uB514\uC9C0\uD138 \uC2B5\uAD00",
    title: "\uC5C5\uBB34 \uC678 \uC2A4\uB9C8\uD2B8\uD3F0 \uD558\uB8E8 \uC0AC\uC6A9\uC2DC\uAC04\uC740?",
    subtitle: "\uC20F\uD3FC, \uC720\uD29C\uBE0C, SNS \uB4F1 \uD3EC\uD568. \uB2E8\uC77C \uC120\uD0DD."
  }), /*#__PURE__*/React.createElement(SingleList, {
    items: window.PHIN.digital,
    selected: picked,
    onPick: pick
  }));
}

// ─── STEP 04: 생활습관 (multi) ────────────────────────
function Step4({
  answers,
  setAnswers,
  onNext,
  onBack
}) {
  const selected = answers.lifestyle || [];
  const toggle = key => {
    const next = selected.includes(key) ? selected.filter(k => k !== key) : [...selected, key];
    setAnswers({
      ...answers,
      lifestyle: next
    });
  };
  return /*#__PURE__*/React.createElement(StepLayout, {
    step: 4,
    total: 6,
    onBack: onBack,
    action: /*#__PURE__*/React.createElement(ActionBar, {
      onNext: onNext,
      nextLabel: selected.length ? `${selected.length}개 선택 · 다음` : '해당 없음 · 다음'
    })
  }, /*#__PURE__*/React.createElement(StepHeader, {
    eyebrow: "STEP 04 \xB7 \uC0DD\uD65C\uC2B5\uAD00",
    title: "\uC194\uC9C1\uD788 \uD574\uB2F9\uB418\uB294 \uAC83 \uBAA8\uB450 \uACE8\uB77C\uC8FC\uC138\uC694",
    subtitle: "\uB9CE\uC774 \uACE8\uB77C\uB3C4 \uAD1C\uCC2E\uC2B5\uB2C8\uB2E4. \uBCF5\uC218 \uC120\uD0DD \uAC00\uB2A5."
  }), /*#__PURE__*/React.createElement(MultiGrid, {
    items: window.PHIN.lifestyle,
    selectedKeys: selected,
    onToggle: toggle
  }));
}

// ─── STEP 05: 하루 걸음수 (single) ────────────────────
function Step5({
  answers,
  setAnswers,
  onNext,
  onBack
}) {
  const picked = answers.steps;
  const pick = k => setAnswers({
    ...answers,
    steps: k
  });
  return /*#__PURE__*/React.createElement(StepLayout, {
    step: 5,
    total: 6,
    onBack: onBack,
    action: /*#__PURE__*/React.createElement(ActionBar, {
      onNext: onNext,
      disabled: !picked
    })
  }, /*#__PURE__*/React.createElement(StepHeader, {
    eyebrow: "STEP 05 \xB7 \uD558\uB8E8 \uAC78\uC74C\uC218",
    title: "\uD558\uB8E8 \uD3C9\uADE0 \uAC78\uC74C\uC218\uB294?",
    subtitle: "\uC2A4\uB9C8\uD2B8\uD3F0 \uB9CC\uBCF4\uACC4 \uAE30\uC900\uC73C\uB85C \uC0DD\uAC01\uD574\uC8FC\uC138\uC694. \uB2E8\uC77C \uC120\uD0DD."
  }), /*#__PURE__*/React.createElement(SingleList, {
    items: window.PHIN.steps,
    selected: picked,
    onPick: pick
  }));
}

// ─── STEP 06: 기본 스펙 ──────────────────────────────
function Step6({
  answers,
  setAnswers,
  onNext,
  onBack
}) {
  const set = (k, v) => setAnswers(prev => ({
    ...prev,
    [k]: v
  }));
  const done = answers.gender && answers.age && answers.height && answers.weight;
  return /*#__PURE__*/React.createElement(StepLayout, {
    step: 6,
    total: 6,
    onBack: onBack,
    action: /*#__PURE__*/React.createElement(ActionBar, {
      onNext: onNext,
      nextLabel: "\uC9C4\uB2E8 \uC644\uB8CC \xB7 \uACB0\uACFC \uBCF4\uAE30",
      disabled: !done,
      hint: done ? '' : '4개 항목 모두 골라주세요'
    })
  }, /*#__PURE__*/React.createElement(StepHeader, {
    eyebrow: "STEP 06 \xB7 \uAE30\uBCF8 \uC815\uBCF4",
    title: "\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uAE30\uBCF8 \uC815\uBCF4\uB97C \uC54C\uB824\uC8FC\uC138\uC694",
    subtitle: "\uD130\uCE58\uB85C\uB9CC \uC120\uD0DD. \uD0C0\uC774\uD551\uC740 \uC5C6\uC2B5\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(BasicGroup, {
    label: "\uC131\uBCC4",
    options: window.PHIN.basics.gender,
    value: answers.gender,
    onPick: v => set('gender', v),
    cols: 2
  }), /*#__PURE__*/React.createElement(BasicGroup, {
    label: "\uB098\uC774",
    options: window.PHIN.basics.age,
    value: answers.age,
    onPick: v => set('age', v),
    cols: 4
  }), /*#__PURE__*/React.createElement(BasicGroup, {
    label: "\uD0A4 (cm)",
    options: window.PHIN.basics.height,
    value: answers.height,
    onPick: v => set('height', v),
    cols: 4
  }), /*#__PURE__*/React.createElement(BasicGroup, {
    label: "\uCCB4\uC911",
    options: window.PHIN.basics.weight,
    value: answers.weight,
    onPick: v => set('weight', v),
    cols: 5
  })));
}

// ───────── Helpers ─────────

function MultiGrid({
  items,
  selectedKeys,
  onToggle
}) {
  const anySelected = selectedKeys.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "phin-multi-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 12
    }
  }, items.map(it => {
    const sel = selectedKeys.includes(it.key);
    return /*#__PURE__*/React.createElement(OptionTile, {
      key: it.key,
      icon: it.icon,
      label: it.label,
      desc: it.desc,
      isSelected: sel,
      isDimmed: anySelected && !sel,
      onClick: () => onToggle(it.key)
    });
  }));
}
function SingleList({
  items,
  selected,
  onPick
}) {
  const anySelected = !!selected;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(it => {
    const sel = selected === it.key;
    return /*#__PURE__*/React.createElement(OptionTile, {
      key: it.key,
      icon: it.icon,
      label: it.label,
      desc: it.desc,
      isSelected: sel,
      isDimmed: anySelected && !sel,
      onClick: () => onPick(it.key)
    });
  }));
}
function BasicGroup({
  label,
  options,
  value,
  onPick,
  cols
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "phin-h2 t-hi",
    style: {
      marginBottom: 12,
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "phin-basic-grid",
    "data-cols": cols,
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 8
    }
  }, options.map(opt => {
    const sel = value === opt;
    const dim = value && value !== opt;
    let cls = 'phin-option';
    if (sel) cls += ' is-selected';else if (dim) cls += ' is-unselected';
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      className: cls,
      onClick: () => onPick(opt),
      style: {
        padding: '14px 12px',
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 600,
        textAlign: 'center'
      }
    }, opt);
  })));
}
Object.assign(window, {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/Steps.jsx", error: String((e && e.message) || e) }); }

// src/scoring.js
try { (() => {
  // PHIN 정적 데이터 — score 로직은 외부 src/scoring.js(v5)에서 처리
  // window.PHIN 객체 초기화
  window.PHIN = window.PHIN || {};
  
  // MBTI 한국어 이름
  window.PHIN.typeNames = {
    ESTJ: '현실 관리형',  ENTJ: '전략 주도형',
    ESFJ: '돌봄 실천형',  ENFJ: '공감 리더형',
    ESTP: '즉흥 행동형',  ENTP: '도전 탐구형',
    ESFP: '활기 공감형',  ENFP: '열정 탐색형',
    ISTJ: '원칙 수호형',  INTJ: '독립 설계형',
    ISFJ: '조용한 돌봄형', INFJ: '통찰 계획형',
    ISTP: '분석 행동형',  INTP: '사색 탐구형',
    ISFP: '감성 실천형',  INFP: '이상 추구형',
  };
  
  // Step1 성향 질문
  window.PHIN.personalityQs = [
    {
      id: 'EI',
      q: '새로운 사람들과 함께할 때 나는?',
      A: { label: '에너지가 생기고 활기차진다' },
      B: { label: '금방 피로해지고 혼자 있고 싶어진다' },
    },
    {
      id: 'SN',
      q: '문제를 해결할 때 나는?',
      A: { label: '경험과 검증된 방법을 따른다' },
      B: { label: '새로운 가능성과 아이디어를 탐색한다' },
    },
    {
      id: 'TF',
      q: '중요한 결정을 내릴 때 나는?',
      A: { label: '논리와 객관적 사실을 우선시한다' },
      B: { label: '감정과 사람들에게 미치는 영향을 고려한다' },
    },
    {
      id: 'JP',
      q: '일상에서 나는?',
      A: { label: '계획을 세우고 체계적으로 움직인다' },
      B: { label: '상황에 맞게 유연하게 대응한다' },
    },
  ];
  
  // Step2 신체 고민
  window.PHIN.bodyIssues = [
    { key: 'weight',   icon: '⚖️',  label: '체중',      desc: '비만 또는 과체중' },
    { key: 'fatigue',  icon: '😴',  label: '만성피로',   desc: '항상 피곤하고 에너지 부족' },
    { key: 'sleep',    icon: '🌙',  label: '수면',       desc: '잠들기 어렵거나 수면의 질 저하' },
    { key: 'stress',   icon: '🧠',  label: '스트레스',   desc: '정신적 압박과 긴장' },
    { key: 'back',     icon: '🦴',  label: '허리·관절',  desc: '통증 또는 불편함' },
    { key: 'digestion',icon: '🫃',  label: '소화',       desc: '더부룩함, 변비, 속쓰림' },
    { key: 'skin',     icon: '✨',  label: '피부',       desc: '트러블, 칙칙함, 노화' },
    { key: 'none',     icon: '💪',  label: '별로 없음',  desc: '전반적으로 건강한 편' },
  ];
  
  // Step3 디지털 습관
  window.PHIN.digital = [
    { key: 'low',    icon: '📵', label: '1시간 미만',   desc: '의식적으로 줄이는 편' },
    { key: 'mid',    icon: '📱', label: '1~3시간',      desc: '평균적인 사용' },
    { key: 'high',   icon: '📲', label: '3~6시간',      desc: '꽤 많이 사용하는 편' },
    { key: 'very',   icon: '🖥️', label: '6시간 이상',   desc: '거의 항상 화면을 본다' },
  ];
  
  // Step4 생활습관
  window.PHIN.lifestyle = [
    { key: 'smoke',    icon: '🚬', label: '흡연',        desc: '현재 담배를 피운다' },
    { key: 'drink',    icon: '🍺', label: '음주',        desc: '주 2회 이상 음주' },
    { key: 'nosport',  icon: '🛋️', label: '운동 안함',   desc: '주 1회 미만 운동' },
    { key: 'latenight',icon: '🌙', label: '야식',        desc: '밤 10시 이후 식사 잦음' },
    { key: 'irregular',icon: '⏰', label: '불규칙 식사', desc: '끼니를 자주 거른다' },
    { key: 'highsalt', icon: '🧂', label: '짜고 매운 음식', desc: '자극적인 식단 선호' },
    { key: 'caffeine', icon: '☕', label: '카페인 과다',  desc: '하루 3잔 이상 커피·에너지음료' },
    { key: 'none',     icon: '🥗', label: '해당 없음',   desc: '건강한 생활을 유지 중' },
  ];
  
  // Step5 걸음수
  window.PHIN.steps = [
    { key: 'low',   icon: '🐌', label: '3,000보 미만',    desc: '거의 앉아서 생활' },
    { key: 'mid',   icon: '🚶', label: '3,000~7,000보',   desc: '가벼운 이동 수준' },
    { key: 'high',  icon: '🏃', label: '7,000~10,000보',  desc: '꽤 활동적인 편' },
    { key: 'very',  icon: '⚡', label: '10,000보 이상',   desc: '매우 활동적' },
  ];
  
  // Step6 기본 정보 옵션 (구버전 호환 — 슬라이더 버전의 Steps.jsx에서는 사용 안 함)
  window.PHIN.basics = {
    gender: ['남성', '여성'],
    age:    ['20대 초반','20대 후반','30대 초반','30대 후반','40대 초반','40대 후반','50대 이상'],
    height: ['150~160','160~170','170~180','180 이상'],
    weight: ['50~60kg','60~70kg','70~80kg','80~90kg','90kg 이상'],
  };
  
  // _lastRaw 초기화
  window.PHIN._lastRaw = null;
  
  })(); } catch (e) { __ds_ns.__errors.push({ path: "src/scoring.js", error: String((e && e.message) || e) }); }

// src/tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  noDeckControls = false,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(() => typeof document !== 'undefined' && !!document.querySelector('deck-stage'), []);
  // deck-stage enables its rail in connectedCallback, but this panel can
  // mount before that element has upgraded. The initial read catches the
  // common case; the listener covers mounting first. (Older deck-stage.js
  // copies still wait for the host's __omelette_rail_enabled postMessage —
  // same listener handles those.)
  const [railEnabled, setRailEnabled] = React.useState(() => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled);
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = e => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem('deck-stage.railVisible') !== '0';
    } catch (e) {
      return true;
    }
  });
  const toggleRail = on => {
    setRailVisible(on);
    window.postMessage({
      type: '__deck_rail_visible',
      on
    }, '*');
  };
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children, hasDeckStage && railEnabled && !noDeckControls && /*#__PURE__*/React.createElement(TweakSection, {
    label: "Deck"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Thumbnail rail",
    value: railVisible,
    onChange: toggleRail
  })))));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

})();

// Shared chrome — header, progress bar, footer, option tiles.
// All step screens compose these.

function Logo({ size = 22 }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'baseline', gap: 0,
      fontFamily: 'var(--font-display)',
      fontSize: size, fontWeight: 900, letterSpacing: '-0.04em',
      color: 'var(--ink-hi)', lineHeight: 1,
    }}>
      PHi<span style={{ color: 'var(--accent)' }}>N</span>
    </div>
  );
}

function TopBar({ step, total, onBack }) {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'rgba(10, 15, 12, 0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div className="phin-container" style={{
        display: 'flex', alignItems: 'center', gap: 16,
        height: 56,
      }}>
        <button onClick={onBack} className="phin-btn-ghost" style={{
          background: 'transparent', border: 0, padding: '8px 10px',
          color: 'var(--ink-mid)', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 14, fontFamily: 'var(--font-body)', whiteSpace: 'nowrap',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          뒤로
        </button>
        <div style={{ flex: 1 }} />
        <Logo size={18} />
        <div style={{ flex: 1 }} />
        <div className="phin-micro" style={{ color: 'var(--ink-mid)', whiteSpace: 'nowrap' }}>
          STEP {String(step).padStart(2, '0')} <span style={{ color: 'var(--ink-lo)' }}>/ {String(total).padStart(2, '0')}</span>
        </div>
      </div>
      <ProgressBar value={step / total} />
    </div>
  );
}

function ProgressBar({ value }) {
  return (
    <div style={{
      height: 2, background: 'var(--line)', overflow: 'hidden',
    }}>
      <div style={{
        height: '100%',
        width: `${value * 100}%`,
        background: 'var(--accent)',
        transition: 'width 360ms var(--ease)',
      }} />
    </div>
  );
}

function StepHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ marginBottom: 32 }}>
      {eyebrow && (
        <div className="phin-micro" style={{ color: 'var(--accent)', marginBottom: 12 }}>
          {eyebrow}
        </div>
      )}
      <h1 className="phin-display-lg t-hi" style={{ marginBottom: 12 }}>
        {title}
      </h1>
      {subtitle && (
        <p className="phin-body-lg t-mid" style={{ maxWidth: 520, margin: 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Bottom-fixed action bar — Next button + footnote
function ActionBar({ onNext, nextLabel = '다음', disabled = false, hint }) {
  return (
    <div style={{
      position: 'sticky', bottom: 0,
      background: 'linear-gradient(to top, var(--bg) 60%, rgba(10,15,12,0))',
      paddingTop: 32, paddingBottom: 24,
      marginTop: 48,
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      }}>
        <button
          className="phin-btn phin-btn-primary"
          onClick={onNext}
          disabled={disabled}
          style={{ minWidth: 220 }}
        >
          {nextLabel}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        {hint && <div className="phin-caption t-lo">{hint}</div>}
      </div>
    </div>
  );
}

// Option — the signature interaction.
// Pass `selectedKey` (single) or `selectedKeys` (array, for multi).
function OptionTile({ icon, label, desc, isSelected, isDimmed, onClick }) {
  let cls = 'phin-option';
  if (isSelected) cls += ' is-selected';
  else if (isDimmed) cls += ' is-unselected';

  return (
    <button className={cls} onClick={onClick}>
      {icon && (
        <span style={{
          fontSize: 26, lineHeight: 1, flexShrink: 0,
          width: 36, height: 36, display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center',
          filter: isSelected ? 'none' : (isDimmed ? 'saturate(0.4) opacity(0.55)' : 'saturate(0.8)'),
          transition: 'filter 220ms var(--ease)',
        }}>{icon}</span>
      )}
      <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span>{label}</span>
        {desc && (
          <span style={{
            fontSize: 13, fontWeight: 500,
            color: isSelected ? 'var(--ink-mid)' : (isDimmed ? 'var(--ink-xlo)' : 'var(--ink-lo)'),
          }}>{desc}</span>
        )}
      </span>
      {isSelected && (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      )}
    </button>
  );
}

// A/B card — bigger tap targets for Step 1.
function ABCard({ letter, label, isSelected, isDimmed, onClick }) {
  let cls = 'phin-option';
  if (isSelected) cls += ' is-selected';
  else if (isDimmed) cls += ' is-unselected';

  return (
    <button className={cls} onClick={onClick} style={{
      flexDirection: 'column', alignItems: 'flex-start',
      gap: 12, padding: 24, minHeight: 130,
      textAlign: 'left', wordBreak: 'keep-all',
    }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 28, height: 28, borderRadius: 9999,
        background: isSelected ? 'var(--accent)' : 'var(--bg-elev-2)',
        color: isSelected ? '#03210f' : 'var(--ink-mid)',
        fontFamily: 'var(--font-numeric)',
        fontWeight: 800, fontSize: 13,
      }}>{letter}</span>
      <span style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.35 }}>
        {label}
      </span>
    </button>
  );
}

// Layout wrapper used by every step.
function StepLayout({ step, total, onBack, children, action }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar step={step} total={total} onBack={onBack} />
      <main className="phin-container-sm" style={{ paddingTop: 56, paddingBottom: 32, flex: 1 }}>
        {children}
      </main>
      {action}
    </div>
  );
}

Object.assign(window, {
  Logo, TopBar, ProgressBar, StepHeader, ActionBar,
  OptionTile, ABCard, StepLayout,
});

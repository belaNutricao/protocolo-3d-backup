/* ============================================================
   Jejum Glicêmico 2D — Course-material surface components
   Thin cosmetic recreations built on assets/bela-style.css.
   Exported to window for cross-file use.
   ============================================================ */

const Drop = ({ size = 16, color = '#E81C92', style = {} }) => (
  <svg viewBox="0 0 24 32" style={{ width: size, height: size * 1.33, color, ...style }}>
    <use href="#drop" />
  </svg>
);

const Pill = ({ children, variant = '' }) => (
  <span className={`pill ${variant}`}>
    {variant === 'green' ? <span className="dot"></span> : null}
    {children}
  </span>
);

const Eyebrow = ({ children }) => <div className="eyebrow">{children}</div>;

const PageHeader = ({ logo = '../../assets/logo.webp' }) => (
  <header className="ph-header"><img className="ph-logo" src={logo} alt="Jejum Glicêmico 2D" /></header>
);

const PageFooter = ({ num }) => (
  <div className="ph-footer">
    <span className="nutri">Isabela Clerot · Nutricionista</span>
    {num ? <span className="num">{num}</span> : null}
  </div>
);

// A4 page shell — stacks like the real deliverables (on-screen mode)
const Page = ({ children, className = '' }) => (
  <section className={`page ${className}`}>{children}</section>
);

const H1 = ({ children, accent }) => (
  <div className="h1-block">
    <div className="h1-mark"><svg viewBox="0 0 24 32"><use href="#drop" /></svg></div>
    <div>
      <h1 className="h1">{children}{accent ? <span className="accent">{accent}</span> : null}</h1>
    </div>
  </div>
);

const Callout = ({ kind = '', icon = '!', title, children }) => (
  <div className={`callout ${kind}`}>
    <span className={`icon ${kind === '' ? 'warn' : ''}`}>{icon}</span>
    <div className="body">
      {title ? <span className={`title ${kind === '' ? 'warn' : ''}`}>{title}</span> : null}
      {children}
    </div>
  </div>
);

const NumCard = ({ n, title, children }) => (
  <div className="num-card">
    <div className="n">{n}</div>
    <div><div className="t">{title}</div><div className="d">{children}</div></div>
  </div>
);

const Tip = ({ n, title, children }) => (
  <div className="tip">
    <div className="tip-num">{n}</div>
    <div><div className="tip-title">{title}</div><div className="tip-desc">{children}</div></div>
  </div>
);

const ScheduleRow = ({ day, time = '7h', title, desc }) => (
  <div className="schedule-row">
    <div className="day-badge">{day}</div>
    <div className="time">{time}</div>
    <div><h3 className="lesson-title">{title}</h3><p className="lesson-desc">{desc}</p></div>
  </div>
);

const DietCard = ({ color = 'azul', name, children }) => (
  <div className={`diet ${color}`}>
    <div className="diet-bar"></div>
    <div><h3 className="diet-name">{name}</h3><p className="diet-desc">{children}</p></div>
  </div>
);

const Stat = ({ value, label }) => (
  <div className="stat"><div className="num">{value}</div><div className="label">{label}</div></div>
);

const PullQuote = ({ children }) => (
  <div className="pull-block"><div className="bar"></div><p className="pull-quote">{children}</p></div>
);

const Sticker = ({ top, big, bot, size = 150 }) => (
  <div className="sticker" style={{ '--size': size + 'px' }}>
    <span className="stamp-bg"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="currentColor" /></svg></span>
    <span className="stamp-ring"></span><span className="stamp-shine"></span>
    <span className="top">{top}</span><span className="big">{big}</span><span className="bot">{bot}</span>
  </div>
);

const DropList = ({ items, cols }) => (
  <ul className={`drop-list ${cols === 2 ? 'two-col' : ''}`}>
    {items.map((it, i) => <li key={i}>{it}</li>)}
  </ul>
);

Object.assign(window, {
  Drop, Pill, Eyebrow, PageHeader, PageFooter, Page, H1,
  Callout, NumCard, Tip, ScheduleRow, DietCard, Stat, PullQuote, Sticker, DropList,
});

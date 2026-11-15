import { useState } from "react";
import "./App.css";

/* ---------- İconlar ---------- */
function Svg({ size = 16, children, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {children}
    </svg>
  );
}
const IconSearch  = (p) => (<Svg {...p}><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></Svg>);
const IconBell    = (p) => (<Svg {...p}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></Svg>);
const IconChevron = (p) => (<Svg {...p}><polyline points="6 9 12 15 18 9" /></Svg>);
const IconUsers   = (p) => (<Svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Svg>);
const IconBox     = (p) => (<Svg {...p}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></Svg>);
const IconChart   = (p) => (<Svg {...p}><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></Svg>);
const IconHistory = (p) => (<Svg {...p}><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></Svg>);
const IconUp      = (p) => (<Svg {...p}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></Svg>);
const IconDown    = (p) => (<Svg {...p}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" /></Svg>);

/* ---------- Məlumatlar ---------- */
const NAV_MAIN  = ["Dashboard", "Products", "Favorites", "Inbox", "Order Lists", "Product Stock"];
const NAV_PAGES = ["Pricing", "Calender", "To-Do", "Contact", "Invoice", "UI Elements", "Team", "Table"];
const NAV_FOOT  = ["Settings", "Logout"];

const STATS = [
  { title: "Total User",    value: "40,689",  delta: "8.5%", dir: "up",   note: "Up from yesterday",   icon: IconUsers,   tint: "purple" },
  { title: "Total Order",   value: "10293",   delta: "1.3%", dir: "up",   note: "Up from past week",   icon: IconBox,     tint: "amber"  },
  { title: "Total Sales",   value: "$89,000", delta: "4.3%", dir: "down", note: "Down from yesterday", icon: IconChart,   tint: "green"  },
  { title: "Total Pending", value: "2040",    delta: "1.8%", dir: "up",   note: "Up from yesterday",   icon: IconHistory, tint: "orange" },
];

const DEALS = [
  { emoji: "⌚", name: "Apple Watch", location: "6096 Marjolaine Landing", date: "12.09.2026 - 12.53 PM", piece: 423, amount: "$34,295", status: "Delivered"  },
  { emoji: "🎧", name: "AirPods Pro", location: "1428 Rooney Bridge",      date: "12.09.2026 - 01.24 PM", piece: 312, amount: "$12,840", status: "Pending"    },
  { emoji: "💻", name: "MacBook Pro", location: "8929 Kreiger Station",    date: "11.09.2026 - 06.47 PM", piece: 158, amount: "$20,806", status: "Delivered"  },
  { emoji: "📱", name: "iPhone 15",   location: "3371 Willms Turnpike",    date: "11.09.2026 - 09.12 AM", piece: 508, amount: "$41,912", status: "Cancelled"  },
  { emoji: "🖥️", name: "iMac 24",     location: "742 Evergreen Terrace",   date: "10.09.2026 - 04.38 PM", piece: 96,  amount: "$18,240", status: "Processing" },
];

const CHART_DATA = [20,24,25,29,30,48,40,39,51,31,37,40,52,42,88,34,45,52,48,46,42,54,46,50,57,62,24,32,31,27,48,49,44,43,72,58,65,60,55,54,58,42,55,50,56,50,56];

/* ---------- Qrafik (saf SVG, kitabxanasız) ---------- */
function SalesChart() {
  const W = 1060, H = 300, L = 56, R = 16, T = 24, B = 40;
  const innerW = W - L - R, innerH = H - T - B;
  const x = (i) => L + (i * innerW) / (CHART_DATA.length - 1);
  const y = (v) => T + (1 - v / 100) * innerH;
  const pts  = CHART_DATA.map((v, i) => [x(i), y(v)]);
  const line = pts.map((p) => p.map((n) => n.toFixed(1)).join(",")).join(" ");
  const area = `${L},${y(0)} ${line} ${x(CHART_DATA.length - 1)},${y(0)}`;
  const spike = CHART_DATA.indexOf(Math.max(...CHART_DATA));
  const sx = x(spike), sy = y(CHART_DATA[spike]);
  const xTicks = ["5k","10k","15k","20k","25k","30k","35k","40k","45k","50k","55k","60k"];
  const yTicks = [20, 40, 60, 80, 100];

  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H}`}>
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#4d7dfe" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#4d7dfe" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {yTicks.map((t) => (
        <g key={t}>
          <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="#eceff4" />
          <text x={L - 12} y={y(t) + 4} textAnchor="end" className="axis">{t}%</text>
        </g>
      ))}

      <polygon points={area} fill="url(#areaGrad)" />
      <polyline points={line} fill="none" stroke="#4d7dfe" strokeWidth="2" />
      {pts.map(([px, py], i) => (
        <circle key={i} cx={px} cy={py} r="3" fill="#4d7dfe" stroke="#fff" strokeWidth="1.2" />
      ))}

      {xTicks.map((t, i) => (
        <text key={t} x={L + (i * innerW) / (xTicks.length - 1)} y={H - 12} textAnchor="middle" className="axis">{t}</text>
      ))}

      <g>
        <rect x={sx - 42} y={sy - 38} width="84" height="22" rx="5" fill="#4d7dfe" />
        <text x={sx} y={sy - 23} textAnchor="middle" className="tooltip">64,3664,77</text>
      </g>
    </svg>
  );
}

/* ---------- App ---------- */
export default function App() {
  const [active, setActive] = useState("Dashboard");

  const NavButton = ({ item }) => (
    <button className={"nav-item" + (active === item ? " active" : "")} onClick={() => setActive(item)}>
      {item}
    </button>
  );

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo"><span>Dash</span>Stack</div>
        <nav>{NAV_MAIN.map((i) => <NavButton key={i} item={i} />)}</nav>
        <div className="nav-sep" />
        <div className="nav-label">Pages</div>
        <nav>{NAV_PAGES.map((i) => <NavButton key={i} item={i} />)}</nav>
        <div className="nav-sep" />
        <nav>{NAV_FOOT.map((i) => <NavButton key={i} item={i} />)}</nav>
      </aside>

      {/* MAIN */}
      <div className="main">
        <header className="topbar">
          <label className="search">
            <IconSearch size={15} />
            <input placeholder="Search" />
          </label>
          <div className="topbar-right">
            <button className="bell"><IconBell size={19} /><span className="badge">6</span></button>
            <button className="lang">🇬🇧 English <IconChevron size={14} /></button>
            <button className="user">
              <span className="avatar">👩🏼‍</span>
              <span className="user-meta"><b>Moni Roy</b><small>Admin</small></span>
              <IconChevron size={14} className="muted" />
            </button>
          </div>
        </header>

        <main className="content">
          <h1 className="page-title">Dashboard</h1>

          {/* STAT KARTLAR */}
          <section className="stats-grid">
            {STATS.map((s) => (
              <article className="stat-card" key={s.title}>
                <div className="stat-top">
                  <div>
                    <div className="stat-title">{s.title}</div>
                    <div className="stat-value">{s.value}</div>
                  </div>
                  <span className={"stat-icon " + s.tint}><s.icon size={20} /></span>
                </div>
                <div className="stat-trend">
                  {s.dir === "up" ? <IconUp size={14} className="up" /> : <IconDown size={14} className="down" />}
                  <span className={s.dir}>{s.delta}</span>
                  <span className="muted">{s.note}</span>
                </div>
              </article>
            ))}
          </section>

          {/* SALES QRAFİKİ */}
          <section className="panel">
            <div className="panel-head">
              <h2>Sales Details</h2>
              <button className="dropdown">October <IconChevron size={13} /></button>
            </div>
            <SalesChart />
          </section>

          {/* DEALS CƏDVƏLİ */}
          <section className="panel">
            <div className="panel-head">
              <h2>Deals Details</h2>
              <button className="dropdown">October <IconChevron size={13} /></button>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th><th>Location</th><th>Date - Time</th>
                    <th>Piece</th><th>Amount</th><th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {DEALS.map((d) => (
                    <tr key={d.name}>
                      <td><span className="product-cell"><span className="product-img">{d.emoji}</span>{d.name}</span></td>
                      <td>{d.location}</td>
                      <td>{d.date}</td>
                      <td>{d.piece}</td>
                      <td>{d.amount}</td>
                      <td><span className={"status status-" + d.status.toLowerCase()}>{d.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
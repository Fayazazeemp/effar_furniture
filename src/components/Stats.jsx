import './Stats.css';

const STATS = [
  { num: '20+', label: 'Years Experience' },
  { num: '5000+', label: 'Products in Stock' },
  { num: '10000+', label: 'Happy Customers' },
  { num: '100%', label: 'Quality Assured' },
];

export default function Stats() {
  return (
    <div id="stats" role="region" aria-label="Key statistics">
      {STATS.map(({ num, label }) => (
        <div className="stat" key={label}>
          <div className="num">{num}</div>
          <div className="label">{label}</div>
        </div>
      ))}
    </div>
  );
}

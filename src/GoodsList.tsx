export default function GoodsList({ goods = [] }) {
  if (!goods.length) return <p>No goods</p>;

  return (
    <ul style={{ padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
      {goods.map(g => (
        <li
          key={g.id ?? `${g.name}-${g.color}`}
          style={{
            padding: 12,
            borderRadius: 10,
            border: '1px solid #ddd',
            background: colorToBg(g.color),
          }}
        >
          <div style={{ fontWeight: 600 }}>{g.name}</div>
          <div style={{ opacity: 0.8 }}>Color: {g.color}</div>
        </li>
      ))}
    </ul>
  );
}

function colorToBg(color) {
  const c = String(color || '').toLowerCase();

  // Використовуй саме ті назви кольорів, що у твоїх goods: "red", "green", ...
  switch (c) {
    case 'red':
      return 'rgba(255, 0, 0, 0.12)';
    case 'green':
      return 'rgba(0, 128, 0, 0.12)';
    case 'blue':
      return 'rgba(0, 0, 255, 0.12)';
    case 'yellow':
      return 'rgba(255, 215, 0, 0.18)';
    case 'black':
      return 'rgba(0, 0, 0, 0.06)';
    default:
      return 'rgba(0, 0, 0, 0.04)';
  }
}

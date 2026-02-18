import React from 'react';
import { Good } from './types/Good';

function colorToBg(color?: string): string {
  switch ((color ?? '').toLowerCase()) {
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

type GoodsListProps = {
  goods: Good[];
};

type GoodItemProps = {
  good: Good;
};

const GoodItem = React.memo(({ good }: GoodItemProps) => (
  <li
    style={{
      padding: 12,
      borderRadius: 10,
      border: '1px solid #ddd',
      background: colorToBg(good.color),
    }}
  >
    <div style={{ fontWeight: 600 }}>{good.name}</div>
    <div style={{ opacity: 0.8 }}>Color: {good.color}</div>
  </li>
));

function GoodsListComponent({ goods }: GoodsListProps) {
  if (!goods.length) {
    return <p>No goods</p>;
  }

  return (
    <ul style={{ padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
      {goods.map(good => (
        <GoodItem key={good.id} good={good} />
      ))}
    </ul>
  );
}

export default React.memo(GoodsListComponent);

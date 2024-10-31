mport React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: good.color }}> {/* Добавляем цвет для текста */}
        {good.name}
      </li>
    ))}
  </ul>
);

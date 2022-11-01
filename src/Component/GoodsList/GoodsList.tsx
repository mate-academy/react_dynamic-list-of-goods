import { FC } from 'react';
import { Good } from '../../types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: FC<Props> = ({ goods }) => (
  <ul className="content">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

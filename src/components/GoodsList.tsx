import { FC } from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: FC<Props> = ({ goods }) => (
  <ul className="list-group list-group-flush">
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
        className="list-group-item text-center"
      >
        {good.name}
      </li>
    ))}
  </ul>
);

import { FC } from 'react';
import './GoodsList.scss';

type Props = {
  preparedGoods: Good[];
};

export const GoodsList: FC<Props> = ({ preparedGoods }) => {
  return (
    <ul className="goodsList">
      {preparedGoods.map(good => (
        <li
          className="goodsList__item"
          key={good.id}
          style={{ color: good.color }}

        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

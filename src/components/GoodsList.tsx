import { FC } from 'react';
import './GoodsList.scss';

interface Props {
  goods: Good[];
}

export const GoodsList: FC<Props> = (props) => {
  const {
    goods,
  } = props;

  return (
    <ul className="Goods">
      {goods && goods.map(good => {
        return (
          <li
            className="Goods__item"
            style={{ color: good.color }}
            key={good.id}
          >
            {good.name}
          </li>
        );
      })}
    </ul>
  );
};

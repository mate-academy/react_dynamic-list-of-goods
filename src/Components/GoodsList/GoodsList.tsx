import { FC, memo } from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: FC<Props> = memo(({ goods }) => {
  return (
    <div className="goods">
      <ul
        className="goods__list">
        {goods.map(good => (
          <li
            data-cy="goods"
            className="goods__item"
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

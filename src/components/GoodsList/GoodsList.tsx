import { FC, memo } from 'react';

interface Props {
  goods: GoodsItem[];
}

export const GoodsList: FC<Props> = memo(({ goods }) => {
  return (
    <ul>
      {goods.map(({ name, color }) => (
        <li
          key={name}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
});

import { FC } from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};

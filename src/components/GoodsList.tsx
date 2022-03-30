import { FC, memo } from 'react';

type Props = {
  goods: Good[],
};

const GoodsList: FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(({ color, id, name }) => (
        <li key={id} style={{ color }}>{name}</li>
      ))}
    </ul>
  );
};

export default memo(GoodsList);

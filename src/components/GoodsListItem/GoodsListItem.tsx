import React from 'react';
import cn from 'classnames';

type Props = {
  name: string;
  color: string;
};

export const GoodsListItem: React.FC<Props> = ({ name, color }) => {
  return (
    <li className={cn(`${color}`)}>
      {name}
    </li>
  );
};

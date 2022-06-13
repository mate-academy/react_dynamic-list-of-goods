import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList:React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => {
        const { id, name, color } = good;

        return (
          <li
            key={id}
            style={{ color: `${color}` }}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

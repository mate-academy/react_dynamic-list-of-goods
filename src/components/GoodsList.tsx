import React from 'react';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => {
        const { id, name, color } = good;

        return (
          <li
            key={id}
            style={{ color }}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

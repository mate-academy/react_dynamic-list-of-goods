import React from 'react';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="app__list">
    {goods.map((good) => {
      if (good) {
        const { id, name, color } = good;

        return (
          <li
            key={id}
            style={{ color }}
          >
            {name}
          </li>
        );
      }

      return null;
    })}

  </ul>
);

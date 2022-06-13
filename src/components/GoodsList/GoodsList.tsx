import React from 'react';

interface Props {
  goodsArray: Good[];
}

export const GoodsList : React.FC<Props> = ({ goodsArray }) => {
  return (
    <ul>
      {
        goodsArray.map(el => (
          <li
            key={el.id}
            style={{ color: el.color }}
          >
            {el.name}
          </li>
        ))
      }
    </ul>
  );
};

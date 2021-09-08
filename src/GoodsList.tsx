import React from 'react';

type Props = {
  data: [];
};

const GoodsList: React.FC<Props> = ({ data }) => {
  return (
    <ul>
      {data.map((good: { name: string, id: number, color: string }) => {
        return (
          <li
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        );
      })}
    </ul>
  );
};

export default GoodsList;

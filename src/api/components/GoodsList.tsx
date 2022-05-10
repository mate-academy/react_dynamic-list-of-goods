import React from 'react';

interface Good {
  id: number;
  name: string;
  color: string;
}

type Props = {
  dataFromServer: Good[];
};

const GoodsList: React.FC<Props> = ({ dataFromServer }) => (
  <ul className="app__list">
    {dataFromServer.map(good => (
      <li
        className="app__item"
        key={good.id}
        style={{ color: '#fff', backgroundColor: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

export default GoodsList;

// import React from 'react';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="list-group list-group-flush">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="list-group-item fs-3"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

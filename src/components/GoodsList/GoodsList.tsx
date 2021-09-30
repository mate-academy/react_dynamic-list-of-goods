import React from 'react';

interface Props {
  goods: Good[]
}

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="list-group text-center">
      {goods.map(({ id, name, color }) => (
        <li
          key={id}
          style={{ color }}
          className="list-group-item"
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

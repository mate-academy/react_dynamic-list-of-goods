import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="list-group mt-4">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="list-group-item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;

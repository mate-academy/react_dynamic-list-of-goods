import React from 'react';

interface Props {
  goods: Good[];
}

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="list-group w-100">
    {goods.map(product => (
      <li
        key={product.id}
        style={{ color: product.color }}
        className="list-group-item"
      >
        {product.name}
      </li>
    ))}
  </ul>
);

export default React.memo(GoodsList);

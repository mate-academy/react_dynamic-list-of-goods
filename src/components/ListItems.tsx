import React from 'react';

const ListItems: React.FC<{goods: Good[]}> = ({ goods }) => (
  <>
    {goods.map(good => (
      <li className="item" key={good.id} style={{ color: `${good.color}` }}>
        {good.name}
      </li>
    ))}
  </>
);

export default ListItems;

import React, { FC } from 'react';

interface Props {
  goods: Good[];
}

const ListItems: FC<Props> = ({ goods }) => (
  <>
    {goods.map(good => (
      <li className="item" key={good.id} style={{ color: `${good.color}` }}>
        {good.name}
      </li>
    ))}
  </>
);

export default ListItems;

import React from 'react';

type Props = {
  id: number;
  name: string;
  color: string;
};

const GoodsItem: React.FC<Props> = (props) => (
  <li style={{ color: `${props.color}` }}>
    {props.name}
  </li>
);

export default GoodsItem;

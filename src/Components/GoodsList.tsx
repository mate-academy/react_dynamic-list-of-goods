import React from 'react';
import Item from './Item';

interface GoodsListProps {
  goods: Product[];
}

const GoodsList: React.FunctionComponent<GoodsListProps> = ({ goods }) => {
  return (
    <ul>
      {goods.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default GoodsList;

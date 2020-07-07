import React from 'react';

interface ItemProps {
  item: Product;
}

const Item: React.FunctionComponent<ItemProps> = ({ item }) => {
  return (
    <li style={{ color: item.color }}>{item.name}</li>
  );
};

export default Item;

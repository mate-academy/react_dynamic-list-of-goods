import React from 'react';

interface GoodItemProps {
  name: string;
  color: string;
}

export const GoodItem = (props: GoodItemProps): JSX.Element => {
  const { name, color } = props;

  return <li style={{ color }}>{name}</li>;
};

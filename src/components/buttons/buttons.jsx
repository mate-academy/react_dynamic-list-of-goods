import React from 'react';
import { getAll, get5First, getRedGoods } from '../../api/goods';
import { Button } from './button';

const buttonsChars = [
  {
    name: 'Load All goods', action: getAll(),
  },
  {
    name: 'Load 5 first goods', action: get5First(),
  },
  {
    name: 'Load red goods', action: getRedGoods(),
  },
];

export function Buttons({ onClick }) {
  return (
    buttonsChars.map(button => (
      <Button
        key={button.name}
        name={button.name}
        onClick={onClick}
        action={button.action}
      />
    ))
  );
}

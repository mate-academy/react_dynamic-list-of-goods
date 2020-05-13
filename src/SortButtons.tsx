import React from 'react';

interface Filter {
  title: string;
  number?: number;
  color?: string;
}

const filters: Filter[] = [{
  title: 'Load All goods',
  number: undefined,
  color: undefined,
}, {
  title: 'Load 5 first goods',
  number: 5,
  color: undefined,
}, {
  title: 'Load 5 red goods',
  number: Infinity,
  color: 'red',
}];

interface Props {
  handleClick: (maxValue?: number, color?: string,) => void;
}

export const SortButtons = (props: Props) => (
  <>
    {filters.map(callback => (
      <button type="button" onClick={() => props.handleClick(callback.number, callback.color)}>
        {callback.title}
      </button>
    ))}
  </>
);

import React from 'react';

interface Props {
  good: Good;
}

export const Good: React.FC<Props> = (props) => (
  <li style={{ color: props.good.color }}>{props.good.name}</li>
);

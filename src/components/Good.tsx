import React from 'react';

interface Props {
  color: string;
  name: string;
}

export const Good: React.FC<Props> = ({ color, name }) => (
  <li style={{ color }}>{name}</li>
);

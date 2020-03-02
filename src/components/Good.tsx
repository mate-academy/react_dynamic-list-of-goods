import React from 'react';

export const Good: React.FC<{key: number; good: Good}> = (props) => {
  const { color, name } = props.good;

  return (
    <li style={{ color }}>{name}</li>
  );
};

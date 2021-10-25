import React from 'react';

interface Props {
  good: Good,
}

export const Good: React.FC<Props> = ({ good }) => {
  const { name, color } = good;

  return (
    <>
      <div style={{ color }}>
        {name}
      </div>
    </>
  );
};

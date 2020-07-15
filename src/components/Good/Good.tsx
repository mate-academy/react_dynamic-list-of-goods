import React from 'react';

interface Props {
  good: Good;
}

const Good: React.FC<Props> = ({ good }) => {
  return (
    <li className="app__item" style={{ color: good.color }}>{good.name}</li>
  );
};

export default Good;

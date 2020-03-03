import React from 'react';

export const GoodItem: React.FC<{good: Good}> = (props) => (
  <li
    className="list-group-item"
    style={{ color: props.good.color }}
  >
    {props.good.name}
  </li>
);

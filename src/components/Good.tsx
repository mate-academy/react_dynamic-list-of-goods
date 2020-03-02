import React from 'react';


export const Good: React.FC<{good: Good}> = (props) => (
  <li style={{ color: props.good.color }}>{props.good.name}</li>
);

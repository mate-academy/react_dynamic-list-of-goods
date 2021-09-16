import React from 'react';

interface Props {
  goods: Good[],
}

export const GoodList:React.FC <Props> = (props) => {
  const { goods } = props;

  return (
    <ul>
      {goods.map((good) => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};

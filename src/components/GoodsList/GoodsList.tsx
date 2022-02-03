import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="content">
      {goods.map((good) => (
        <li style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};

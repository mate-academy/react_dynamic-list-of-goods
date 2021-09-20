import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="App__list">
      {goods && goods.map(user => (
        <li key={user.id} style={{ color: user.color }}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

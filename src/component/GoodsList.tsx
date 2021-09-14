import React from 'react';

type Props = {
  users: Good[];
};

export const GoodsList: React.FC<Props> = (props) => {
  const { users } = props;

  return (
    <ul className="App__list">
      {users && users.map(user => (
        <li key={user.id} style={{ color: user.color }}>{user.name}</li>
      ))}
    </ul>
  );
};

import React from 'react';

interface Good {
  id: number;
  name: string;
  color: string;
}

type Props = {
  users: Good[]
};

const GoodsList: React.FC<Props> = ({ users }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id} style={{ color: `${user.color}` }}>
            {user.name}
          </li>
        );
      })}
    </ul>
  );
};

export default GoodsList;

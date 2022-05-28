import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <table className="table">

      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        {goods.map(good => (
          <tr key={good.id}>
            <td>{good.id}</td>
            <td style={{ color: good.color }}>{good.name}</td>
            <td>{good.color}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

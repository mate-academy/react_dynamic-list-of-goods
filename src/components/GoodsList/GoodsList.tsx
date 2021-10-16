import React from 'react';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <table className="table mx-auto mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {goods.map(({ id, name, color }) => (
          <tr key={id}>
            <td>{id}</td>
            <td style={{ color }}>{name}</td>
            <td style={{ color }}>{color}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

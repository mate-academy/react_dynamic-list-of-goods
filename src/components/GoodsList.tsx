import React from 'react';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <table className="table is-fullwidth mx-6 my-4">
      <thead>
        <th>№</th>
        <th>Name</th>
        <th>Color</th>
      </thead>
      <tbody>
        {goods.map(({ id, name, color }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td
              style={{ color }}
            >
              {color}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

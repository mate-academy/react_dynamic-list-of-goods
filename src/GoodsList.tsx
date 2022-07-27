import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return goods.length > 0
    ? (
      <table className="table mt-5 is-narrow">
        <thead>
          <tr>
            <th>#</th>
            <th>Good</th>
          </tr>
        </thead>
        <tbody>
          {goods.map(good => (
            <tr key={good.id}>
              <td>{good.id}</td>
              <td
                data-cy="good"
                style={{ color: good.color }}
              >
                {good.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <h2 className="subtitle is-size-4 mt-5">
        No goods selected
      </h2>
    );
};

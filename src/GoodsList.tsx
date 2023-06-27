import React from 'react';
import cn from 'classnames';

import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => {
  const classes = (good: Good) => (
    cn(
      {
        'has-text-link': good.color === 'blue',
        'has-text-danger': good.color === 'red',
        'has-text-success': good.color === 'green',
      },
    ));

  return (
    <div className="box table-container">
      <table
        className="table is-striped is-narrow is-fullwidth"
      >
        <thead>
          <tr>
            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                ID
              </span>
            </th>

            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                Name
              </span>
            </th>

            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                Color
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          {goods.map(good => (
            <tr key={good.id}>
              <td className={`has-text-weight-bold ${classes(good)}`}>
                {good.id}
              </td>

              <td className={classes(good)}>
                {good.name}
              </td>

              <td className={classes(good)}>
                {good.color}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

import { FC } from 'react';
import { Good } from '../../types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: FC<Props> = ({ goods }) => (
  <table
    className="table is-striped is-bordered is-hoverable is-fullwidth"
    style={{ marginTop: 20 }}
  >
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Color</th>
      </tr>
    </thead>

    <tbody>
      {goods.map((good) => (
        <tr key={good.id}>
          <td>{good.id}</td>
          <td
            data-cy="good"
            style={{ color: good.color }}
          >
            {good.name}
          </td>
          <td>{good.color}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

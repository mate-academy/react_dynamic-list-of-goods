import { FC, memo } from 'react';

interface Props {
  goods: Good[],
}

export const GoodList: FC<Props> = memo(({ goods }) => (
  <table className="table is-hoverable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Color</th>
      </tr>
    </thead>

    <tbody>
      {goods.length > 0 ? goods.map(good => (
        <tr>
          <td>{good.id}</td>
          <td>{good.name}</td>
          <td>
            <span style={{ color: good.color }}>{good.color}</span>
          </td>
        </tr>
      )) : (
        <tr>
          <td>
            <span className="subtitle" style={{ color: 'red' }}>
              No goods found
            </span>
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

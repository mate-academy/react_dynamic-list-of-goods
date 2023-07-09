import { FC, memo } from 'react';
import { Good } from '../../types/Good';

function areGoodsEqual(prevGoods: Good[], currGoods: Good[]): boolean {
  if (prevGoods.length !== currGoods.length) {
    return false;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < prevGoods.length; i++) {
    const prevGood = prevGoods[i];
    const currGood = currGoods[i];

    const goodKeys = Object.keys(prevGood);

    // eslint-disable-next-line no-restricted-syntax
    for (const key of goodKeys) {
      if (prevGood[key] !== currGood[key]) {
        return false;
      }
    }
  }

  return true;
}

type Props = {
  goods: Good[]
};

export const GoodsList: FC<Props> = memo(({ goods }) => (
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
), (prevProps, currProps) => {
  return areGoodsEqual(prevProps.goods, currProps.goods);
});

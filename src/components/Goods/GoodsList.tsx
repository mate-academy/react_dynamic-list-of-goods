import './GoodsList.scss';
import { Good } from '../../Types';

type Props = {
  goodsForDisplay: Good[],
};

export const GoodsList = ({ goodsForDisplay }: Props) => (
  <>
    <table className="goods__info">
      <thead>
        <tr>
          <th className="goods__info--header">Good name</th>
          <th className="goods__info--header">Good color</th>
        </tr>
      </thead>
      <tbody>
        {
          goodsForDisplay.map(good => (
            <tr key={good.id}>
              <td style={{ color: good.color }}>
                {good.name}
              </td>
              <td style={{ color: good.color }}>
                {good.color}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </>
);

import { Product } from '../types/Product';

type Props = {
  goods: Product[]
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

export default GoodsList;

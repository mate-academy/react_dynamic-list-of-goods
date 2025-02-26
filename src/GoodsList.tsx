import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList = ({ goods }: Props) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }} data-cy="good">
        {good.name}
      </li>
    ))}
  </ul>
);

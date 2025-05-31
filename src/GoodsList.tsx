import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li style={{ color: good.color }} key={good.id} data-cy="good">
          {good.name}
        </li>
      ))}
    </ul>
  );
}

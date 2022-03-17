import { Good } from './Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <div>
      <ul>
        {goods.map(good => (
          <li
            style={{ color: `${good.color}` }}
            key={good.id}
          >
            {good.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

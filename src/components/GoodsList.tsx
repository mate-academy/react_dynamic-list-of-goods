import { User } from '../types/User';

type Props = {
  goodsList: User[]
};

const GoodsList: React.FC<Props> = ({ goodsList }) => {
  return (
    <div>
      <ul>
        {goodsList.map(item => (
          <li
            key={item.id}
            style={{ color: item.color }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoodsList;

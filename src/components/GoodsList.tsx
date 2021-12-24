import { Good } from '../react-app-env';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(({ id, name, color }) => (
        <li key={id} style={{ color }}>
          {name}
        </li>
      ))}
    </ul>
  );
};

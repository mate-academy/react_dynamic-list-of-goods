import { Good } from '../../types/Good';

import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="GoodsList">
      {goods.map(({ id, name, color }) => (
        <li key={id} style={{ color }} className="GoodsList__item">
          {name}
        </li>
      ))}
    </ul>
  );
};

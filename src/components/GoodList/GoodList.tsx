import { FC } from 'react';
import 'bulma';

type Props = {
  goods: Good[];
};

export const GoodList: FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(item => (
        <li
          key={item.id}
          style={{ color: item.color }}
          className="is-size-4 has-text-centered"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

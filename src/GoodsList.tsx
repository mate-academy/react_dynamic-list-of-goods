import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const MemoGoodsList = React.memo<Props>(({ goods }) => {
  MemoGoodsList.displayName = 'GoodsList';

  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} data-cy="good" style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
});

export default MemoGoodsList;

// export const GoodsList: React.FC<Props> = React.memo(({ goods }) => {
//   return (
//     <ul>
//       {goods.map(good => (
//         <li key={good.id} data-cy="good" style={{ color: good.color }}>
//           {good.name}
//         </li>
//       ))}
//     </ul>
//   );
// };)

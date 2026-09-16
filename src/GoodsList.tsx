import React, { useState } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods = [] }) => {
  const [list] = useState<Good[]>(goods);
  const [hasError] = useState(false);

  return (
    <div>
      {hasError && (
        <div className="notification is-danger">
          Something went wrong while fetching data.
        </div>
      )}

      <ul>
        {list.map(good => (
          <li key={good.id}>{good.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(GoodsList);

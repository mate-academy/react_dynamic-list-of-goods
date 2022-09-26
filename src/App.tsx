import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [users, setUsers] = useState<Good[]>([]);
  // const [loudAll, setLoudAll] = useState(false);
  // const [loudFiveGoods, setFiveGoods] = useState(false);
  // const [loudRedGoods, setRedGoods] = useState(false);
  // const [loudError, setError] = useState(false);


  const a = async () => {
    // if (loudAll) {
    //   return;
    // }
    //   setLoudAll(true);
    const users1 = await getAll();

    setUsers(users1);

      // setLoudAll(false);
  };

  const b = async () => {
      // setFiveGoods(true);
    const users2 = await get5First();

      setUsers(users2);
      // setFiveGoods(false);
  };

  const c = async () => {
      // setRedGoods(true);
      const users3 = await getRedGoods();

      setUsers(users3);
      // setRedGoods(false);
  };
    // if (users.length === 0) {
    //   return <p>Not found users</p>
    // }
  // }, []);

  // useEffect(() => a(),[users,loudAll,loudFiveGoods,loudRedGoods] );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => a()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => b()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => c()}
      >
        Load red goods
      </button>

      <GoodsList goods={users} />
    </div>
  );
};

import {
  FC,
  memo,
  useState,
} from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './components/GoodsList';

type FetchFunction = () => Promise<Good[]>;

enum FetchType {
  none,
  all,
  fiveFirst,
  onlyRed,
}

const App: FC = () => {
  const [goods, setGoods] = useState((): Good[] => []);
  const [currentFetch, setCurrentFetch] = useState(FetchType.none);

  const getGoods = (fetchFunc: FetchFunction, nextFetch: FetchType = FetchType.none) => () => {
    if (currentFetch !== nextFetch) {
      fetchFunc().then(goodsFromServer => setGoods(goodsFromServer));
      setCurrentFetch(nextFetch);
    }
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        className="button"
        onClick={getGoods(getAll, FetchType.all)}
      >
        Load All goods
      </button>
      <button
        type="button"
        className="button"
        onClick={getGoods(get5First, FetchType.fiveFirst)}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        className="button"
        onClick={getGoods(getRedGoods, FetchType.onlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default memo(App);

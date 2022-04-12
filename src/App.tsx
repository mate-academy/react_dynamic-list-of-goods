import './App.scss';
import {
  FC, memo, useCallback, useState,
} from 'react';
import {
  getAllGoods, getFirstFive, getRedGoods,
} from './api/goods';
import { GoodsList } from './components/GoodsList';
import { LoadType } from './enums/LoadType';

export const App: FC = memo(() => {
  const [goods, setGoods] = useState<GoodsItem[]>([]);
  const [currentLoadType, setCurrentLoadType] = useState(LoadType.Default);

  const getGoods = useCallback(async (loadType: LoadType) => {
    let loadCallback: GoodsPromise;

    switch (loadType) {
      case LoadType.All:
        loadCallback = getAllGoods;
        break;
      case LoadType.FiveFirst:
        loadCallback = getFirstFive;
        break;
      case LoadType.Red:
        loadCallback = getRedGoods;
        break;
      default:
        throw new Error('Error: invalid load type!');
    }

    const goodsFromServer = await loadCallback();

    setGoods(goodsFromServer);
    setCurrentLoadType(loadType);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic Goods List</h1>

      <div className="App__container">
        <button
          className="App__button"
          type="button"
          disabled={currentLoadType === LoadType.All}
          onClick={() => getGoods(LoadType.All)}
        >
          All
        </button>

        <button
          className="App__button"
          type="button"
          disabled={currentLoadType === LoadType.FiveFirst}
          onClick={() => getGoods(LoadType.FiveFirst)}
        >
          Five first
        </button>

        <button
          className="App__button"
          type="button"
          disabled={currentLoadType === LoadType.Red}
          onClick={() => getGoods(LoadType.Red)}
        >
          Red
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
});

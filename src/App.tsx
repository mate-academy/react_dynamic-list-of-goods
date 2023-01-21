import {
  FC, memo, useCallback, useState,
} from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { LoadingTypes } from './enums/LoadingTypes';
import { getAll, get5First, getRed } from './api/goods';

export const App: FC = memo(() => {
  const [goods, setGoods] = useState<GoodsItem[]>([]);
  const [currentLoadType, setCurrentLoadType] = useState(LoadingTypes.Default);

  const getGoods = useCallback(async (LoadingType: LoadingTypes) => {
    let loadCallback: GoodsPromise;

    switch (LoadingType) {
      case LoadingTypes.All:
        loadCallback = getAll;
        break;
      case LoadingTypes.FiveFirst:
        loadCallback = get5First;
        break;
      case LoadingTypes.Red:
        loadCallback = getRed;
        break;
      default:
        throw new Error('Error: invalid load type!');
    }

    const goodsFromServer = await loadCallback();

    setGoods(goodsFromServer);
    setCurrentLoadType(LoadingType);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        className="App__button"
        data-cy="all-button"
        type="button"
        disabled={currentLoadType === LoadingTypes.All}
        onClick={() => getGoods(LoadingTypes.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="App__button"
        disabled={currentLoadType === LoadingTypes.FiveFirst}
        onClick={() => getGoods(LoadingTypes.FiveFirst)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="App__button"
        disabled={currentLoadType === LoadingTypes.Red}
        onClick={() => getGoods(LoadingTypes.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
});

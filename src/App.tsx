import { FC, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum GoodsType {
  None,
  All,
  FirstFive,
  Red,
}

export const App: FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [selectedGoods, setSelectedGoods] = useState(GoodsType.None);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGoods = (apiCallBack: () => Promise<Good[]>, type: GoodsType) => {
    setErrorMessage('');

    if (selectedGoods !== type) {
      setIsLoading(true);
      apiCallBack()
        .then(goodsFromServer => {
          setVisibleGoods(goodsFromServer);
          setIsLoading(false);
        })
        .catch(error => setErrorMessage(error));
      setSelectedGoods(type);
    }
  };

  const loadAll = () => loadGoods(getAll, GoodsType.All);

  const loadFirstFive = () => loadGoods(get5First, GoodsType.FirstFive);

  const loadRedGoods = () => loadGoods(getRedGoods, GoodsType.Red);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
      >
        Load red goods
      </button>

      {!isLoading && !errorMessage && (<GoodsList goods={visibleGoods} />)}
      {isLoading && (<div>Loading...</div>)}
      {errorMessage && (<div>Something gone wrong... Please, try later</div>)}
    </div>
  );
};

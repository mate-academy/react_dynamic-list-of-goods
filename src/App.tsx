import { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [preparedGoods, setPreparedGoods] = useState<Good[]>([]);
  const [selectedButton, setSelectedButton] = useState('no');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (selectedButton === 'all') {
      getAll()
        .then(setPreparedGoods)
        .finally(() => setLoading(false));
    }

    if (selectedButton === 'first5') {
      get5First()
        .then(setPreparedGoods)
        .finally(() => setLoading(false));
    }

    if (selectedButton === 'red') {
      getRedGoods()
        .then(setPreparedGoods)
        .finally(() => setLoading(false));
    }
  }, [selectedButton]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods {preparedGoods.length}</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setSelectedButton('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setSelectedButton('first5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setSelectedButton('red')}
      >
        Load red goods
      </button>
      {!loading && preparedGoods.length > 0 && (
        <GoodsList goods={preparedGoods} />
      )}
    </div>
  );
};

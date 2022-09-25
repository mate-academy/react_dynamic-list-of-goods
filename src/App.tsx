/* eslint-disable */
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { useState } from 'react';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => {
          getAll()
            .then(products => setGoods(products));
        }}
      >
        Load all goods
      </button>

      <button
        onClick={() => {
          get5First()
            .then(products => setGoods(products));
        }}
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => {
          getRedGoods()
            .then(products => setGoods(products));
        }}
      >
        Load red goods
      </button>

      {goods.length !== 0 && (
        <ul>
          {goods.map(good => (
            <li key={good.id}>
              <span className={`good ${good.color}`}>
                {good.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;

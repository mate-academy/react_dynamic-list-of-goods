import * as React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  return (
    <>
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={async () => {
            try {
              const data = await goodsAPI.getAll();

              setGoods(data);
            } catch (error) {
              // eslint-disable-next-line
              console.error(error);
            }
          }}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={async () => {
            try {
              const data = await goodsAPI.get5First();

              setGoods(data);
            } catch (error) {
              // eslint-disable-next-line
              console.error(error);
            }
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={async () => {
            try {
              const data = await goodsAPI.getRedGoods();

              setGoods(data);
            } catch (error) {
              // eslint-disable-next-line
              console.error(error);
            }
          }}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    </>
  );
};

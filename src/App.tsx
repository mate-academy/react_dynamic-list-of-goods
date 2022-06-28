import { FC, useState } from 'react';
import './App.scss';
import * as goodsAPI from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <button
        type="button"
        onClick={async () => {
          setGoods(await goodsAPI.getAll());
        }}
        className="App__button"
      >
        Load All goods
      </button>

      <button
        type="button"
        onClick={async () => {
          setGoods(await goodsAPI.getFiveFirst());
        }}
        className="App__button"
      >
        Load five first
      </button>

      <button
        type="button"
        onClick={async () => {
          setGoods(await goodsAPI.getRedGoods());
        }}
        className="App__button red"
      >
        Load only red goods
      </button>

      <GoodsList
        goods={goods}
      />
    </div>
  );
};

export default App;

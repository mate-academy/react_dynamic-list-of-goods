import { FC, useState } from 'react';
import './App.scss';
import 'bulma';

import * as goodsAPI from './api/goods';
import { GoodList } from './components/GoodList/GoodList';
import { Buttons } from './components/Buttons/Buttons';

const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const onGetAll = async () => {
    const data = await goodsAPI.getAll();

    setGoods(data);
  };

  const onGet5First = async () => {
    const data = await goodsAPI.get5First();

    setGoods(data);
  };

  const onGetRedGoods = async () => {
    const data = await goodsAPI.getRedGoods();

    setGoods(data);
  };

  return (
    <div className="app mt-5">
      <h1 className="title has-text-centered">
        Dynamic list of Goods
      </h1>

      <Buttons
        onGetAll={onGetAll}
        onGet5First={onGet5First}
        onGetRedGoods={onGetRedGoods}
      />

      {goods.length > 0 && (
        <GoodList
          goods={goods}
        />
      )}
    </div>
  );
};

export default App;

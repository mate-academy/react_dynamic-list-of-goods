import React, { useState } from 'react';
import { getGoods } from './helpers/api';
import { GoodsList } from './components/GoodsList';
import { IGoodsItem } from './helpers/interfaces';
import { Button } from './components/Button';
import './App.css';

const App: React.FC = () => {
  const [goods, setGoods] = useState<IGoodsItem[]>([]);

  async function loadGoods(filterName: string) {
    try {
      const goods = await getGoods();
      switch (filterName) {
        case 'all':
          setGoods(goods);
          break;

        case 'firstFive':
          setGoods([...goods]
            .sort((a: IGoodsItem, b: IGoodsItem) => a.name.localeCompare(b.name))
            .slice(0, 5));
          break;

        case 'redOnly':
          setGoods(goods
            .filter((goodsItem: IGoodsItem) => goodsItem.color === 'red'));
          break;

        default:
          break;
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="row center-align">
        <Button
          title="Load All goods"
          filterName="all"
          loadGoods={loadGoods}
        />
        <Button
          title="Load 5 first goods"
          filterName="firstFive"
          loadGoods={loadGoods}
        />
        <Button
          title="Load red goods"
          filterName="redOnly"
          loadGoods={loadGoods}
        />
      </div>
      <div className="row">
        <div className="col s6 offset-s3">
          <GoodsList goods={goods}/>
        </div>

      </div>
    </div>
  );
};

export default App;

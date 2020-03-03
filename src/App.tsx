import React, { useState } from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { GoodList } from './components/GoodsList/GoodList';
import './App.css';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const url = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

  const downloadGoodsList = async (): Promise<Good[]> => {
    setIsLoading(true);

    const goodsData = fetch(url)
      .then(response => {
        return response.json();
      });

    // setTimeout for demo only
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return goodsData;
  };


  const handleFirstGoods = () => {
    downloadGoodsList()
      .then(list => {
        list.sort((a: Good, b: Good) => a.name.localeCompare(b.name));
        list.splice(5);

        setGoods(list);
      });
  };

  const handleRedGood = () => {
    downloadGoodsList()
      .then(list => setGoods(list
        .filter((item1: Good) => item1.color === 'red')))
  };

  const handleAllGoods = () => {
    downloadGoodsList()
      .then(list => {
        setGoods(list);
      });
  };


  return (
    <div className="container text-center">
      {isLoading && <div className="loader" />}
      <h1 className="title">Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={handleAllGoods}
        className="btn btn-primary btn-sm"
      >
        Load all products
      </button>
      <button
        type="button"
        onClick={handleFirstGoods}
        className="btn btn-primary btn-sm"
      >
        Load 5 products
      </button>
      <button
        type="button"
        onClick={handleRedGood}
        className="btn btn-primary btn-sm"
      >
        Load Red products
      </button>

      <GoodList goods={goods} />
    </div>
  );
};

import React, { useState, FC } from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { GoodList } from './components/GoodsList/GoodList';
import './App.css';
import { downloadGoodsList } from './utils/api';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = (filterName: string) => {
    setIsLoading(true);

    downloadGoodsList()
      .then(list => {
        switch (filterName) {
          case 'sortAndFive': {
            setGoods(list.sort((a: Good, b: Good) => a.name.localeCompare(b.name))
              .slice(0, 5));
            break;
          }

          case 'redOnly': {
            setGoods(list.filter((item1: Good) => item1.color === 'red'));
            break;
          }

          default: {
            setGoods(list);
          }
        }
      }).then(response => {
        // setTimeout for demo only
        setTimeout(() => {
          setIsLoading(false);
        }, 500);

        return response;
      });
  };

  return (
    <div className="container text-center">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => handleLoad('all')}
        className="btn btn-primary btn-sm"
      >
        Load all products
      </button>
      <button
        type="button"
        onClick={() => handleLoad('sortAndFive')}
        className="btn btn-primary btn-sm"
      >
        Load 5 products
      </button>
      <button
        type="button"
        onClick={() => handleLoad('redOnly')}
        className="btn btn-primary btn-sm"
      >
        Load Red products
      </button>
      <div className="content">
        {isLoading ? <div className="loader" /> : <GoodList goods={goods} />}
      </div>
    </div>
  );
};

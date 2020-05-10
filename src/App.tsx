import React, { useState } from 'react';
import { getGoods } from './api/api';
import './App.css';
import { GoodsList, Goods } from './components/GoodsList';


const App: React.FC = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const loadGoods = (filter: string) => {
    setLoading(true);

    setTimeout(() => {
      getGoods()
        .then(items => {
          switch (filter) {
            case 'first-5':
              setGoods(items
                .sort((a: Goods, b: Goods) => a.name.localeCompare(b.name))
                .slice(0, 5));
              break;
            case 'only-red':
              setGoods(items.filter((item: Goods) => item.color === 'red'));
              break;
            default:
              setGoods(items);
          }

          setLoading(false);
        });
    }, 1000);
  };

  return (
    <div className="good-list">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        className="waves-effect waves-light indigo accent-1 btn"
        onClick={() => loadGoods('all')}
      >
        Load All goods
      </button>
      <button
        type="button"
        className="waves-effect waves-light indigo accent-1 btn"
        onClick={() => loadGoods('first-5')}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        className="waves-effect waves-light indigo accent-1 btn"
        onClick={() => loadGoods('only-red')}
      >
        Load red goods
      </button>
      {isLoading && (
        <div className="progress centered #ede7f6 deep-purple lighten-5">
          <div className="indeterminate deep-purple lighten-2" />
        </div>
      )}
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;

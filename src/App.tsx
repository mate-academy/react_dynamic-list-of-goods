import React, { useState } from 'react';
import { getGoods } from './api/api';
import './App.css';
import { GoodsList, Goods } from './components/GoodsList';
import { Button } from './components/Button';
import { Loader } from './components/Loader';


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
      <Button
        filter="all"
        title="Load All goods"
        loadGoods={loadGoods}
      />
      <Button
        filter="first-5"
        title="Load 5 first goods"
        loadGoods={loadGoods}
      />
      <Button
        filter="only-red"
        title="Load red goods"
        loadGoods={loadGoods}
      />
      {isLoading && <Loader />}
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;

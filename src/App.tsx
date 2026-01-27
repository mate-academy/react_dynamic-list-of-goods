import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { buttonsAttr } from './constants/constants';
import Button from './components/Button/Button';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleOnChange = (fetchFunc: () => Promise<Good[]>) => {
    fetchFunc().then(data => setGoods([...data]));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {buttonsAttr.map(attr => {
        const [text, data, fetchData] = attr;

        return (
          <Button
            key={text}
            type="button"
            text={text}
            dataAttr={data}
            onClick={() => handleOnChange(fetchData)}
          />
        );
      })}

      <GoodsList goods={goods} />
    </div>
  );
};

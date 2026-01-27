import React, { useCallback, useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { buttonsAttr } from './constants/constants';
import Button from './components/Button/Button';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorLoad, setErrorLoad] = useState('');

  const handleOnChange = useCallback((fetchFunc: () => Promise<Good[]>) => {
    fetchFunc()
      .then(data => {
        setGoods([...data]);
        setErrorLoad('');
      })
      .catch(error => setErrorLoad(error.message));
  }, []);

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

      {!errorLoad && <GoodsList goods={goods} />}
      {errorLoad && <p>{errorLoad}</p>}
    </div>
  );
};

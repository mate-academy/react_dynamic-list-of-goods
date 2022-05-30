/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './App.scss';
import { Button } from 'react-bootstrap';
import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const allGoodsFromServer = await getAll();

    setGoods(allGoodsFromServer);
  };

  const get5FirstGoods = async () => {
    const fiveFirstGoodsFromServer = await get5First();

    setGoods(fiveFirstGoodsFromServer);
  };

  const getRed = async () => {
    const redGoodsFromServer = await getRedGoods();

    setGoods(redGoodsFromServer);
  };

  const hideGoodsList = () => {
    setGoods([]);
  };

  return (
    <div className="App">
      <h1 className="App__title">
        Grogu needs some food
      </h1>
      <img
        className="App__image"
        src="https://c.tenor.com/z9Y5WAtqlqUAAAAC/baby-yoda-the-mandalorian.gif"
      />
      <div className="App__buttons">
        <Button
          variant="outline-success"
          type="button"
          className="App__button-main"
          onClick={getAllGoods}
        >
          Show all
        </Button>
        <Button
          variant="outline-secondary"
          type="button"
          className="App__button-main"
          onClick={get5FirstGoods}
        >
          Show 5 first
        </Button>

        <Button
          variant="outline-danger"
          type="button"
          className="App__button-main"
          onClick={getRed}
        >
          Show only red
        </Button>
      </div>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}

      {goods.length > 0 && (
        <Button
          variant="outline-warning"
          type="button"
          className="App__button-hide"
          onClick={hideGoodsList}
        >
          Hide
        </Button>
      )}
      <div className="App__looks">
        What we have?
      </div>
    </div>
  );
};

export default App;

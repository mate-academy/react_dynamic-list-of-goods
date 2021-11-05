import React from 'react';
import './App.scss';
import * as goodsAPI from './api/goods';
import { GoodsList } from './Components/GoodsList';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = async (getSpecificGoods: () => Promise<Good[]>) => {
    const goods = await getSpecificGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.loadGoods(goodsAPI.getAll);
          }}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.loadGoods(goodsAPI.get5First);
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.loadGoods(goodsAPI.getRed);
          }}
        >
          Load red goods
        </button>
        <br />
        {goods.length === 0 ? 'No goods' : (<GoodsList goods={goods} />)}
      </div>
    );
  }
}

export default App;

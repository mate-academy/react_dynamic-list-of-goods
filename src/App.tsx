import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[];
};

type Callback = () => Promise<Good[]>;

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handlerGoods = async (callback: Callback) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="goods">
        <h1 className="goods__title">Dynamic list of Goods</h1>
        <form className="goods__form">
          <button
            type="button"
            className="goods__button"
            onClick={() => this.handlerGoods(getAll)}
          >
            Load all goods
          </button>
          <button
            type="button"
            className="goods__button"
            onClick={() => this.handlerGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="goods__button"
            onClick={() => this.handlerGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </form>

        {goods && <GoodsList preparedGoods={goods} />}
      </div>
    );
  }
}

export default App;

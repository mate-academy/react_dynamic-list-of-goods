import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[] | [],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  setGoods = async (method: () => Promise<Good[]>) => {
    const goods = await method();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="goods">
        <h1 className="goods__title">
          Dynamic list of goods
        </h1>

        <div className="goods__buttons">
          <button
            type="button"
            className="goods__button"
            onClick={() => this.setGoods(getAll)}
          >
            Load all goods
          </button>
          <button
            type="button"
            className="goods__button"
            onClick={() => this.setGoods(get5First)}
          >
            Load first 5
          </button>
          <button
            type="button"
            className="goods__button"
            onClick={() => this.setGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        {goods.length > 0
          ? (
            <GoodsList goods={goods} />
          ) : (
            <p>
              Click to start!
            </p>
          )}
      </div>
    );
  }
}

export default App;

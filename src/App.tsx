import React from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

interface State {
  goods: Good[] | null;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: null,
  };

  getGoods = async (goodsItem: () => Promise<Good[]>) => {
    const goods = await goodsItem();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <div className="box">
          <h1 className="title is-1">List of Goods:</h1>
          <button
            type="button"
            className="button is-info mx-2"
            onClick={() => this.getGoods(getAll)}
          >
            Load all goods
          </button>

          <button
            type="button"
            className="button is-info mx-2"
            onClick={() => this.getGoods(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="button is-info mx-2"
            onClick={() => this.getGoods(getRedGoods)}
          >
            Load red goods
          </button>

          {goods && (
            <GoodsList goods={goods} />
          )}
        </div>
      </div>
    );
  }
}

export default App;

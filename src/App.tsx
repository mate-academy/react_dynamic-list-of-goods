import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type Props = {};

type State = {
  goods: Good[];
};

class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  load = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="box app">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="app__buttons">
          <button
            type="button"
            className="button is-primary"
            onClick={() => this.load(getAll)}
          >
            Load All goods
          </button>

          <button
            type="button"
            className="button is-link"
            onClick={() => this.load(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="button is-danger"
            onClick={() => this.load(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        {!!goods.length && (<GoodsList goods={goods} />)}
      </div>
    );
  }
}

export default App;

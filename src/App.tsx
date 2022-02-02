import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type Props = {};
type State = {
  goods: Good[];
};

export class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  showGoods = async (loadGoods: () => Promise<Good[]>) => {
    const goods = await loadGoods();

    this.setState({ goods });
  };

  render() {
    return (
      <div className="app">
        <h1>Dynamic list of Goods</h1>

        <div className="app__buttons">
          <button
            type="button"
            className="app__button app__button--all"
            onClick={() => this.showGoods(getAll)}
          >
            Load All
          </button>
          <button
            type="button"
            className="app__button app__button--five"
            onClick={() => this.showGoods(get5First)}
          >
            Load Five First
          </button>
          <button
            type="button"
            className="app__button app__button--red"
            onClick={() => this.showGoods(getRedGoods)}
          >
            Load Red
          </button>
        </div>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

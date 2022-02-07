import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
};
type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  showGoods = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render(): React.ReactNode {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="btn-group">
          <button
            type="button"
            onClick={() => this.showGoods(getAll)}
            className="btn btn-outline-primary"
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={() => this.showGoods(get5First)}
            className="btn btn-outline-primary"
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.showGoods(getRedGoods)}
            className="btn btn-outline-primary"
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </>
    );
  }
}

import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[],
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (method: () => Promise<Good[]>) => {
    const goods = await method();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="content">
          {goods.length === 0 && (
            <p>No goods</p>
          )}
          <GoodList goods={goods} />
        </div>

        <div className="buttons">
          <button type="button" onClick={() => this.loadGoods(getAll)}>
            Load All goods
          </button>

          <button type="button" onClick={() => this.loadGoods(get5First)}>
            Load 5 first goods
          </button>

          <button type="button" onClick={() => this.loadGoods(getRedGoods)}>
            Load red goods
          </button>
        </div>
      </>
    );
  }
}

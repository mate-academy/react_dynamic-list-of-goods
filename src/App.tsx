import React from 'react';
import './App.scss';
import { GoodsList } from './api/component/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './api/type/Good';

type State = {
  goods: Good[],
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = async (listType: () => Promise<Good[]>) => {
    const goods = await listType();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;
    const { loadGoods } = this;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={() => loadGoods(getAll)}>
          Load All goods
        </button>
        <button type="button" onClick={() => loadGoods(get5First)}>
          Load 5 first goods
        </button>
        <button type="button" onClick={() => loadGoods(getRedGoods)}>
          Load red goods
        </button>
        {goods && (
          <GoodsList goods={goods} />
        )}
      </>
    );
  }
}

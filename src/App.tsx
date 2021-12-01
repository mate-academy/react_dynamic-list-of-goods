import React from 'react';
import './App.scss';
import * as goodsAPI from './api/goods';
import GoodsList from './GoodsList';

interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = async (fn: any) => {
    const goods = await fn();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={() => this.loadGoods(goodsAPI.getAll)}>Load All goods</button>
        <button type="button" onClick={() => this.loadGoods(goodsAPI.get5First)}>Load 5 first goods</button>
        <button type="button" onClick={() => this.loadGoods(goodsAPI.getRedGoods)}>Load red goods</button>

        {goods.length > 0 && <GoodsList list={goods} />}
      </div>
    );
  }
}

export default App;

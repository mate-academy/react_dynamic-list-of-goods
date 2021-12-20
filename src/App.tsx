import React from 'react';
import './App.scss';

import { GoodsList } from './GoodsList';
import { getAll } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  getGoods = async () => {
    try {
      const allGoods = await getAll();

      this.setState({ goods: allGoods });
    } catch (error) {
      throw new Error(`Error - ${error}`);
    }
  };

  get5First = async () => {
    try {
      const allGoods = await getAll();

      const fiveGoods = allGoods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);

      this.setState({ goods: fiveGoods });
    } catch (error) {
      throw new Error(`Error - ${error}`);
    }
  };

  getRedGoods = async () => {
    try {
      const allGoods = await getAll();
      const redGood = allGoods.filter(good => good.color === 'red');

      this.setState({ goods: redGood });
    } catch (error) {
      throw new Error(`Error - ${error}`);
    }
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={this.getGoods}>Load All goods</button>
        <button type="button" onClick={this.get5First}>Load 5 first goods</button>
        <button type="button" onClick={this.getRedGoods}>Load red goods</button>
        <div>
          {this.state.goods
          && <GoodsList goods={this.state.goods} />}
        </div>
      </>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  handleAllGoods = async () => {
    const goods = await getAll();

    this.setState({
      goods,
    });
  };

  handle5Goods = async () => {
    const goods = await get5First();

    this.setState({
      goods,
    });
  };

  handleRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({
      goods,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="submit"
            onClick={this.handleAllGoods}
          >
            Load All goods
          </button>
          <button
            type="submit"
            onClick={this.handle5Goods}
          >
            Load 5 first goods
          </button>
          <button
            type="submit"
            onClick={this.handleRedGoods}
          >
            Load red goods
          </button>
        </div>
        <GoodList
          goods={goods}
        />
      </div>
    );
  }
}

export default App;

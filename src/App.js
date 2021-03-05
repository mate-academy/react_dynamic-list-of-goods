import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAllGoods = async(e) => {
    const { name } = e.target;
    let goods;

    switch (name) {
      case 'allGoods':
        goods = await getAll();
        break;

      case 'first5Goods':
        goods = await get5First();
        break;

      case 'redGoods':
        goods = await getRedGoods();
        break;

      default:
        break;
    }

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1 className="header">Dynamic list of Goods</h1>
        <div className="wrapper">
          <button
            type="button"
            name="allGoods"
            onClick={this.loadAllGoods}
          >
            Load All goods
          </button>

          <button
            type="button"
            name="first5Goods"
            onClick={this.loadAllGoods}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            name="redGoods"
            onClick={this.loadAllGoods}
          >
            Load red goods
          </button>
          {goods.length !== 0 && (
          <GoodsList goods={goods} />
          )}

        </div>
      </div>
    );
  }
}

export default App;

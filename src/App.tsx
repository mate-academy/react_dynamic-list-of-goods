import React from 'react';
import './App.css';
import { getGoods } from './components/api';
import { State, Goods } from './components/interfaces';
import { GoodsList } from './components/GoodsList';

export default class App extends React.Component {
  state: State = {
    goods: [],
  };

  LoadAllGoods = () => {
    getGoods().then(goods => {
      this.setState({
        goods,
      });
    });
  };

  LoadFiveFirstGoods = () => {
    getGoods().then(goods => {
      this.setState({
        goods: goods.sort((a: Goods, b: Goods) => a.name.localeCompare(b.name)).slice(0, 5),
      });
    });
  };

  LoadRedGoods = () => {
    getGoods().then(goods => {
      this.setState({
        goods: goods.filter((good: Goods) => good.color === 'red'),
      });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className="button button__loadAll"
          onClick={this.LoadAllGoods}
        >
          Show List
        </button>
        <button
          type="button"
          className="button button__fiveFirst"
          onClick={this.LoadFiveFirstGoods}
        >
          Show 5 first goods
        </button>
        <button
          type="button"
          className="button button__redGoods"
          onClick={this.LoadRedGoods}
        >
          Show 5 first goods
        </button>
        <div className="GoodsList">
          <GoodsList goods={goods} />

        </div>
      </div>
    );
  }
}

import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getAllGoods = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  get5Goods = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  getRedGoods = () => {
    getRed()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { state, getAllGoods, get5Goods, getRedGoods } = this;
    const { goods } = state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <section className="list-block">
          <div className="btn-block">
            <button
              className="btn"
              type="button"
              onClick={getAllGoods}
            >
              All goods
            </button>
            <button
              className="btn"
              type="button"
              onClick={get5Goods}
            >
              First 5 goods
            </button>
            <button
              className="btn"
              type="button"
              onClick={getRedGoods}
            >
              Red goods
            </button>
          </div>
          <GoodsList goods={goods} />
        </section>
      </>
    );
  }
}

export default App;

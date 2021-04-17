import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showAllGoods = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  showFiveGoods = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  showRedGoods= () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <section className="goods">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.showAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.showFiveGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.showRedGoods}
        >
          Load red goods
        </button>
        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
      </section>
    );
  }
}

export default App;

import React from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './Components/GoodsList';

class App extends React.PureComponent {
  state = {
    goods: [],
  };

  handlerGetAll = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  handlerGet5First = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  handlerGetRedGoods = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.handlerGetAll}
        >
          Load all goods
        </button>
        <button
          type="button"
          onClick={this.handlerGet5First}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.handlerGetRedGoods}
        >
          Get red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

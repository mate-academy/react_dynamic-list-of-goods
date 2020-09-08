import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import GoodList from './components/GoodList';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadAllGoods = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  load5FirstGoods = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  loadRedGoods = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          onClick={this.load5FirstGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>

        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;

import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  allGoods = async() => {
    const goodFromServer = await getAll();

    this.setState({
      goods: goodFromServer,
    });
  };

  fiveFirstGoods = async() => {
    const first5 = await get5First();

    this.setState({
      goods: first5,
    });
  };

  redGoods = async() => {
    getRedGoods().then((red) => {
      this.setState({
        goods: red,
      });
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.allGoods}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.fiveFirstGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.redGoods}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

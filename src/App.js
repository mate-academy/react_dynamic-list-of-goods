import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
    isListVisible: false,
  }

  showAll = () => {
    getAll()
      .then((goods) => {
        this.setState(prevState => ({
          goods,
          isListVisible: !prevState.isListVisible,
        }));
      });
  }

  show5First = () => {
    get5First()
      .then((goods) => {
        this.setState(prevState => ({
          goods,
          isListVisible: !prevState.isListVisible,
        }));
      });
  }

  showRedGoods = () => {
    getRedGoods()
      .then((goods) => {
        this.setState(prevState => ({
          goods,
          isListVisible: !prevState.isListVisible,
        }));
      });
  }

  render() {
    const { isListVisible } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={this.showAll}>
          Load All goods
        </button>
        <button type="button" onClick={this.show5First}>
          Load 5 first goods
        </button>
        <button type="button" onClick={this.showRedGoods}>
          Load red goods
        </button>
        {isListVisible && <GoodsList goods={this.state.goods} />}
      </>
    );
  }
}

export default App;

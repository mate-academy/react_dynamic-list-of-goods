import React from 'react';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import './App.scss';

export class App extends React.Component {
  state = {
    goods: [],
  };

  setGoods = (goods) => {
    this.setState({
      goods,
    });
  };

  showGoods = (promise) => {
    promise().then(this.setGoods);
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={() => this.showGoods(getAll)}>
          Load All goods
        </button>
        <button type="button" onClick={() => this.showGoods(get5First)}>
          Load 5 first goods
        </button>
        <button type="button" onClick={() => this.showGoods(getRedGoods)}>
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

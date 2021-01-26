import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './GoodList';

class App extends React.Component {
  state = {
    goods: [],
  }

  toSelect = (callback) => {
    callback()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={() => this.toSelect(getAll)}>
          Load All goods
        </button>
        <button type="button" onClick={() => this.toSelect(get5First)}>
          Load 5 first goods
        </button>
        <button type="button" onClick={() => this.toSelect(getRedGoods)}>
          Load red goods
        </button>

        {goods.length > 0 && (
          <GoodList goods={goods} />
        )}
      </>
    );
  }
}

export default App;

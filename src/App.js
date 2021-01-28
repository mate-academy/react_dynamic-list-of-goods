import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  setGoods = (goods) => {
    this.setState(state => ({
      goods,
    }));
  }

  displayGoods = (value) => {
    switch (value) {
      case 'all':
        getAll()
          .then(response => this.setGoods(response));
        break;
      case 'five':
        get5First()
          .then(response => this.setGoods(response));
        break;
      case 'red':
        getRedGoods()
          .then(response => this.setGoods(response));
        break;
      default:
        break;
    }
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <GoodsList goods={goods} />

        <button
          type="button"
          onClick={() => this.displayGoods('all')}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.displayGoods('five')}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.displayGoods('red')}
        >
          Load red goods
        </button>
      </>

    );
  }
}

export default App;

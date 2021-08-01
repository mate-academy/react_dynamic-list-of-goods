import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  setGoods = async(getGoods) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>
          Dynamic list of Goods
        </h1>
        <button
          type="button"
          name="Load All goods"
          onClick={() => this.setGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          name="Load 5 first goods"
          onClick={() => this.setGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          name="Load red goods"
          onClick={() => this.setGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

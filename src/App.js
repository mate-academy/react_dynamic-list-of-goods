import React from 'react';
import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './Components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAllGoods = async() => {
    const loadGoods = await getAll();

    this.setState({ goods: loadGoods });
  }

  loadFiveFirst = async() => {
    const loadGoods = await get5First();

    this.setState({ goods: loadGoods });
  }

  loadRedGoods = async() => {
    const loadGoods = await getRed();

    this.setState({ goods: loadGoods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.loadFiveFirst}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAllGoods = async() => {
    const loadGoods = await getAll();

    this.setState({ goods: loadGoods });
  }

  loadFiveFirstGoods = async() => {
    const loadGoods = await get5First();

    this.setState({ goods: loadGoods });
  }

  loadRedGoods = async() => {
    const loadGoods = await getRedGoods();

    this.setState({ goods: loadGoods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          className="button"
          onClick={this.loadAllGoods}
        >
          All goods
        </button>
        <button
          type="button"
          className="button"
          onClick={this.loadFiveFirstGoods}
        >
          First five goods
        </button>
        <button
          type="button"
          className="button"
          onClick={this.loadRedGoods}
        >
          Red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

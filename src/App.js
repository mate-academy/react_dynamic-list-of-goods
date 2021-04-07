import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = async(loader) => {
    const loadGoods = await loader();

    this.setState({ goods: loadGoods });
  }

  render() {
    const { loadGoods } = this;
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          className="button"
          onClick={() => loadGoods(getAll)}
        >
          All goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => loadGoods(get5First)}
        >
          First five goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => loadGoods(getRedGoods)}
        >
          Red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

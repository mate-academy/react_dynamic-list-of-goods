import React from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './components/GoodsList/GoodsList';

class App extends React.PureComponent {
  state = {
    goods: null,
  }

  getTodosHandler = async(query) => {
    const goods = await query();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.getTodosHandler(getAll)}
        >
          all
        </button>
        <button
          type="button"
          onClick={() => this.getTodosHandler(get5First)}
        >
          5 first
        </button>
        <button
          type="button"
          onClick={() => this.getTodosHandler(getRedGoods)}
        >
          red goods
        </button>

        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

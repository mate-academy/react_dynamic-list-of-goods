import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  onFilter = (callback) => {
    const init = async() => {
      const result = await callback();

      this.setState({ goods: result });
    };

    init();
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => {
            this.onFilter(getAll);
          }}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => {
            this.onFilter(get5First);
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => {
            this.onFilter(getRedGoods);
          }}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

import React from 'react';

import './App.scss';
import { GoodsList } from './comonents/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  setFilter = async(filter) => {
    const selectedData = await filter();

    this.setState({ goods: selectedData });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <div className="App__buttons">
          <button type="button" onClick={() => this.setFilter(getAll)}>
            Load All goods
          </button>

          <button type="button" onClick={() => this.setFilter(get5First)}>
            Load 5 first goods
          </button>

          <button type="button" onClick={() => this.setFilter(getRedGoods)}>
            Load red goods
          </button>
        </div>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

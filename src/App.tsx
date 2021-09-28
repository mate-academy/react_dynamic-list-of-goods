import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './Component/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  };

  handleImport = (
    event: React.MouseEvent<HTMLButtonElement>,
    callback: () => Promise<Good[]>,
  ) => {
    event.preventDefault();
    callback().then(goods => this.setState({ goods }));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            onClick={event => this.handleImport(event, getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={event => this.handleImport(event, get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={event => this.handleImport(event, getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

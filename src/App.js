import React from 'react';
import './App.scss';

import { GoodsList } from './Components/GoodsList/GoodsList';
import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadData = (request) => {
    request()
      .then(data => this.setState({ goods: [...data] }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
        <button
          type="button"
          onClick={() => this.loadData(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.loadData(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.loadData(getRed)}
        >
          Load red goods
        </button>
      </>
    );
  }
}

export default App;

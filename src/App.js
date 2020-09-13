import React from 'react';
import { getAll, get5First, getRed } from './api/goods';
import GoodsList from './components/GoodsList';

import './App.scss';

class App extends React.Component {
  state = {
    goods: '',
  }

  loadData = async(response) => {
    const items = await response();

    this.setState({
      goods: items,
    });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
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
        <GoodsList goods={[...this.state.goods]} />
      </>
    );
  }
}

export default App;

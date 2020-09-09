import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: '',
  }

  handleQuery = (func) => {
    func()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        {goods && <GoodsList goods={goods} />}
        <button
          type="button"
          onClick={() => this.handleQuery(getAll)}
        >
          Load all goods
        </button>
        <button
          type="button"
          onClick={() => this.handleQuery(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.handleQuery(getRed)}
        >
          Load red goods
        </button>
      </>
    );
  }
}

export default App;

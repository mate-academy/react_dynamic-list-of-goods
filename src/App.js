import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  handlerGoods = async(request) => {
    this.setState({
      goods: await request(),
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            onClick={() => this.handlerGoods(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={() => this.handlerGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.handlerGoods(getRedGoods)}
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

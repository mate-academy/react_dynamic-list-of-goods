import React from 'react';
import { GoodsList } from './GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          name="loadAll"
          onClick={() => {
            getAll()
              .then((goods) => {
                this.setState({ goods });
              });
          }}
        >
          Load All goods
        </button>

        <button
          type="button"
          name="load5First"
          onClick={() => {
            get5First()
              .then((goods) => {
                this.setState({ goods });
              });
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          name="loadRed"
          onClick={() => {
            getRedGoods()
              .then((goods) => {
                this.setState({ goods });
              });
          }}
        >
          Load red
        </button>

        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

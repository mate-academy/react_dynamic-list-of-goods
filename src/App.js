import React from 'react';
import { GoodsList } from './GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goodList: [],
  }

  render() {
    const { goodList } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            getAll().then((good) => {
              this.setState({ goodList: good });
            });
          }}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => {
            get5First().then((good) => {
              this.setState({ goodList: good });
            });
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => {
            getRedGoods().then((good) => {
              this.setState({ goodList: good });
            });
          }}
        >
          Load red goods
        </button>

        <ul>
          <GoodsList goodList={goodList} />
        </ul>
      </>
    );
  }
}

export default App;

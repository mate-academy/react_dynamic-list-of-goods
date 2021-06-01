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
            getAll().then((goods) => {
              this.setState({ goodList: goods });
            });
          }}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => {
            get5First().then((goods) => {
              const good = goods.map(goo => goo.name).sort();
              const arr = [];

              for (let i = 0; i < 5; i += 1) {
                arr.push(goods.find(goo => goo.name === good[i]));
              }

              this.setState({ goodList: arr });
            });
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => {
            getRedGoods().then((goods) => {
              const red = goods.filter(good => good.color === 'red');

              this.setState({ goodList: red });
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

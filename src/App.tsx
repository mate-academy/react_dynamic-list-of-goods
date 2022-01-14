import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

interface Good {
  id: number,
  name: string,
  color: string,
}

type State = {
  goodsList: Good[],
};

class App extends React.Component {
  state: State = {
    goodsList: [],
  };

  addAll = async () => {
    const goodsFromServer = await getAll();

    this.setState({ goodsList: goodsFromServer });
  };

  add5First = async () => {
    const goodsFromServer = await getAll();

    const fiveFirst = get5First(goodsFromServer);

    this.setState({ goodsList: fiveFirst });
  };

  addRedGoods = async () => {
    const goodsFromServer = await getAll();

    const fiveFirst = getRedGoods(goodsFromServer);

    this.setState({ goodsList: fiveFirst });
  };

  render() {
    const { goodsList } = this.state;

    return (
      <div className="app">
        <h1 className="app-title">Dynamic list of Goods</h1>

        <GoodsList goodsList={goodsList} />

        <div className="app-buttons">
          <button
            className="app-btn"
            type="button"
            onClick={this.addAll}
          >
            Load All goods
          </button>

          <button
            className="app-btn"
            type="button"
            onClick={this.add5First}
          >
            Load 5 first goods
          </button>

          <button
            className="app-btn"
            type="button"
            onClick={this.addRedGoods}
          >
            Load red goods
          </button>
        </div>

      </div>
    );
  }
}

// const App: React.FC = () => (
//   <h1>Dynamic list of Goods</h1>
// );

export default App;

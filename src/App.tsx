import React from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './components/GoodsList';

type AppState = {
  goods: Good[],
};

class App extends React.Component<{}, AppState> {
  state = {
    goods: [],
  };

  setGoods = async (method: () => Promise<Good[]>) => {
    const goods = await method();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.setGoods(getAll);
          }}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => {
            this.setGoods(get5First);
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => {
            this.setGoods(getRedGoods);
          }}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

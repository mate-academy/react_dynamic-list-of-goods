import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodList/GoodList';

type State = {
  goods: Good[]
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadData = async (getData: () => Promise<Good[]>) => {
    const goods = await getData();

    this.setState({
      goods: [...goods],
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1 className="title">
          Dynamic list of Goods
        </h1>
        <button
          className="button"
          type="button"
          onClick={() => (this.loadData(getAll))}
        >
          Load All goods
        </button>

        <button
          className="button"
          type="button"
          onClick={() => (this.loadData(get5First))}
        >
          Load 5 first goods
        </button>

        <button
          className="button"
          type="button"
          onClick={() => (this.loadData(getRedGoods))}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

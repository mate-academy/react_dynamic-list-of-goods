import React from 'react';
import './App.scss';
import GoodsList from './Components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  getGoods = async (type: () => Promise<Good[]>) => {
    const goods = await type();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button type="button" onClick={() => this.getGoods(getAll)}>
          Load All goods
        </button>

        <button type="button" onClick={() => this.getGoods(get5First)}>
          Load 5 first goods
        </button>

        <button type="button" onClick={() => this.getGoods(getRedGoods)}>
          Load red goods
        </button>

        {goods && (
          <GoodsList goods={goods} />
        )}
      </>
    );
  }
}

export default App;

import React from 'react';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  showSelectedGoods = async (selectedGoods: () => Promise<Good[]>) => {
    const goods = await selectedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>

        <div className="App__buttons">
          <button
            type="button"
            className="App__button"
            onClick={() => this.showSelectedGoods(getAll)}
          >
            Load All goods
          </button>

          <button
            type="button"
            className="App__button"
            onClick={() => this.showSelectedGoods(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="App__button"
            onClick={() => this.showSelectedGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        {goods && (
          <GoodsList
            goods={goods}
          />
        )}
      </div>
    );
  }
}

export default App;

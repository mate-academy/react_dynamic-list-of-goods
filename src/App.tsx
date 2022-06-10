import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  isVisible: boolean,
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    goods: [],
  };

  loadGoods = async (goodsList: () => Promise<Good[]>) => {
    const goods = await goodsList();

    this.setState({ goods });
  };

  letVisible = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.loadGoods(getAll);
              this.letVisible();
            }}
          >
            Load All goods
          </button>
          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.loadGoods(get5First);
              this.letVisible();
            }}
          >
            Load 5 first goods
          </button>
          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.loadGoods(getRedGoods);
              this.letVisible();
            }}
          >
            Load red goods
          </button>
        </div>
        {isVisible && (
          <GoodsList allGoods={goods} />
        )}
      </div>
    );
  }
}

export default App;

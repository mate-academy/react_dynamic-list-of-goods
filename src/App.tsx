/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './type/Good';
import { GoodsList } from './component/GoodsList';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  handler = (promise: Promise<Good[]>) => {
    promise.then((goods: Good[]) => {
      this.setState({ goods });
    });
  };

  render() {
    return (
      <div className="App">
        <GoodsList
          goods={this.state.goods}
        />

        <button
          type="button"
          onClick={() => {
            this.handler(getAll());
          }}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => {
            this.handler(get5First());
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => {
            this.handler(getRedGoods());
          }}
        >
          Load red goods
        </button>
      </div>
    );
  }
}

export default App;

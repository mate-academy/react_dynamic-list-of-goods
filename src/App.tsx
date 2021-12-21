/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './type/Good';
import { GoodsList } from './component/GoodsList';

type State = {
  goods: Good[] | [];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
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
            getAll().then(goods => {
              this.setState({ goods });
            });
          }}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => {
            get5First().then(goods => {
              this.setState({ goods });
            });
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => {
            getRedGoods().then(goods => {
              this.setState({ goods });
            });
          }}
        >
          Load red goods
        </button>
      </div>
    );
  }
}

export default App;

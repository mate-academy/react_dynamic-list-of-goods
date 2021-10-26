import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  showAll = () => {
    getAll()
      .then(goods => this.setState({ goods }));
  };

  show5First = () => {
    get5First()
      .then(goods => this.setState({ goods }));
  };

  showRed = () => {
    getRedGoods()
      .then(goods => this.setState({ goods }));
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.showAll()}
        >
          Load all goods
        </button>
        <button
          type="button"
          onClick={() => this.show5First()}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.showRed()}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

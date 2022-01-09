import React from 'react';
import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { GoodsList } from './GoodsList';

interface State {
  goods: Good[]
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  handleGetAll = () => {
    goodsAPI.getAll()
      .then((goods: Good[]) => this.setState({ goods }));
  };

  handleGet5First = () => {
    goodsAPI.get5First()
      .then((goods: Good[]) => this.setState({ goods }));
  };

  handleGetRedGoods = () => {
    goodsAPI.getRedGoods()
      .then((goods: Good[]) => this.setState({ goods }));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.handleGetAll}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.handleGet5First}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.handleGetRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadAllgoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  load5First = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  loadRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <div className="App">
          <h1>Dynamic list of Goods</h1>
          <div className="App__button">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.loadAllgoods}
            >
              Load All goods
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.load5First}
            >
              Load 5 first goods
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.loadRedGoods}
            >
              Load red goods
            </button>
          </div>
          <GoodsList goods={goods} />
        </div>
      </>
    );
  }
}

export default App;

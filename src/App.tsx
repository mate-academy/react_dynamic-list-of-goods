import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type Props = {};

type State = {
  goods: Good[];
};

class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  loadAll = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  loadFive = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  loadRed = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="box app">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="app__buttons">
          <button
            type="button"
            className="button is-primary"
            onClick={this.loadAll}
          >
            Load All goods
          </button>

          <button
            type="button"
            className="button is-link"
            onClick={this.loadFive}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="button is-danger"
            onClick={this.loadRed}
          >
            Load red goods
          </button>
        </div>

        {!!goods.length && (<GoodsList goods={goods} />)}
      </div>
    );
  }
}

export default App;

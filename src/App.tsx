import React from 'react';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

interface State {
  goods: Good[]
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  addAllGoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  addFiveGoods = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  addRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <div className="content">
          <h1 className="title">Dynamic list of Goods</h1>
          <button
            type="button"
            onClick={() => this.addAllGoods()}
            className="button is-link mx-2"
          >
            Get All Goods
          </button>
          <button
            type="button"
            onClick={() => this.addFiveGoods()}
            className="button is-link mx-2"
          >
            Get 5 Goods
          </button>
          <button
            type="button"
            onClick={() => this.addRedGoods()}
            className="button is-link mx-2"
          >
            Get Red Goods
          </button>
          <GoodsList goods={goods} />
        </div>
      </div>
    );
  }
}

export default App;

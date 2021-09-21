import React from 'react';
import './App.scss';
import { GoodsButton } from './components/GoodsButton';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[] | null;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: null,
  };

  getAllGoods = () => {
    getAll()
      .then(goods => {
        this.setState({
          goods,
        });
      });
  };

  loadFirst5Goods = () => {
    get5First()
      .then(goods => {
        this.setState({
          goods,
        });
      });
  };

  loadRedGoods = () => {
    getRedGoods()
      .then(goods => {
        this.setState({
          goods,
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App container col-6">
        <h1>Dynamic list of Goods</h1>

        <div className="d-flex justify-content-between">
          <GoodsButton getGoods={this.getAllGoods} buttonTitle="All goods" />

          <GoodsButton getGoods={this.loadFirst5Goods} buttonTitle="First Five goods" />

          <GoodsButton getGoods={this.loadRedGoods} buttonTitle="Red goods" />
        </div>

        {goods && (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;

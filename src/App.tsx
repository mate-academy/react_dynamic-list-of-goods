import React from 'react';
import './App.scss';
import { AllGoodsButton } from './components/AllGoodsButton';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { LoadFirst5Button } from './components/LoadFirst5Button';
import { LoadRedGoodsButton } from './components/LoadRedGoodsButton';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[] | null;
};

class App extends React.Component<{}, State> {
  state = {
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
    return (
      <div className="App container col-6">
        <h1>Dynamic list of Goods</h1>

        <div className="d-flex justify-content-between">
          <AllGoodsButton getGoods={this.getAllGoods} />

          <LoadFirst5Button getGoods={this.loadFirst5Goods} />

          <LoadRedGoodsButton getGoods={this.loadRedGoods} />
        </div>

        {this.state.goods && (
          <GoodsList goods={this.state.goods} />
        )}
      </div>
    );
  }
}

export default App;

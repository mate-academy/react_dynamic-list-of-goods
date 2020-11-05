import React, { PureComponent } from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Buttons } from './components/Buttons/Buttons';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends PureComponent {
  state = {
    goods: [],
  }

  allGoods = () => {
    getAll()
      .then(this.handleGoods);
  }

  sortedGoods = () => {
    get5First()
      .then(this.handleGoods);
  }

  redGoods = () => {
    getRedGoods()
      .then(this.handleGoods);
  }

  handleGoods = (goods) => {
    this.setState({ goods });
  }

  cleanGoods = () => this.handleGoods([]);

  render() {
    const { cleanGoods } = this;
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        {goods.length === 0
          ? (
            <Buttons {...this} />
          ) : (
            <GoodsList goods={goods} callback={cleanGoods} />
          )}
      </>
    );
  }
}

export default App;

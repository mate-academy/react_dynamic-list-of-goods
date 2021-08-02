import React from 'react';
import classNames from 'classnames';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './Components/GoodsList';

class App extends React.Component {
  state = {
    goods: null,
    goodsConfiguration: '',
  }

  setGoods = (goodsFromServer, configuration) => {
    this.setState({
      goods: goodsFromServer,
      goodsConfiguration: configuration,
    });
  }

  getAllGoods = () => {
    getAll()
      .then(goodsFromServer => this.setGoods(goodsFromServer, 'all'));
  }

  get5FirstGoods = () => {
    get5First()
      .then(goodsFromServer => this.setGoods(goodsFromServer, 'first5'));
  }

  getRedGoods = () => {
    getRed()
      .then(goodsFromServer => this.setGoods(goodsFromServer, 'red'));
  }

  render() {
    const { getAllGoods, get5FirstGoods, getRedGoods } = this;
    const { goods, goodsConfiguration } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <div className="btn-container">
          <button
            className={classNames('btn', 'btn-primary', {
              active: goodsConfiguration === 'all',
            })}
            type="button"
            onClick={getAllGoods}
          >
            Get all goods
          </button>
          <button
            className={classNames('btn', 'btn-primary', {
              active: goodsConfiguration === 'first5',
            })}
            type="button"
            onClick={get5FirstGoods}
          >
            Get 5 first goods
          </button>
          <button
            className={classNames('btn', 'btn-primary', {
              active: goodsConfiguration === 'red',
            })}
            type="button"
            onClick={getRedGoods}
          >
            Get &quot;red&quot; goods
          </button>
        </div>

        {goods && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;

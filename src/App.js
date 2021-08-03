import React from 'react';
import classNames from 'classnames';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './Components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
    goodsConfiguration: '',
  }

  setGoods = (goodsFromServer, configuration) => {
    this.setState({
      goods: goodsFromServer,
      goodsConfiguration: configuration,
    });
  }

  getGoods = (callback, configuration) => {
    callback()
      .then(goodsFromServer => this.setGoods(goodsFromServer, configuration));
  }

  render() {
    const { getGoods } = this;
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
            onClick={() => getGoods(getAll, 'all')}
          >
            Get all goods
          </button>
          <button
            className={classNames('btn', 'btn-primary', {
              active: goodsConfiguration === 'first5',
            })}
            type="button"
            onClick={() => getGoods(get5First, 'first5')}
          >
            Get 5 first goods
          </button>
          <button
            className={classNames('btn', 'btn-primary', {
              active: goodsConfiguration === 'red',
            })}
            type="button"
            onClick={() => getGoods(getRed, 'red')}
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

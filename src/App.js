import React, { Component } from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends Component {
  state = {
    goods: [],
    goodsListIsDisplaying: false,
  }

  setGoodsFromServer = promise => promise.then(goods => this.setState({
    goods,
    goodsListIsDisplaying: true,
  }));

  render() {
    const { goodsListIsDisplaying, goods } = this.state;
    const btnClasses = 'btn btn-outline-info';

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="submit"
          className={btnClasses}
          onClick={() => this.setGoodsFromServer(getAll())}
        >
          Load all goods
        </button>

        <button
          type="submit"
          className={btnClasses}
          onClick={() => this.setGoodsFromServer(get5First())}
        >
          Load 5 first goods
        </button>

        <button
          type="submit"
          className={btnClasses}
          onClick={() => this.setGoodsFromServer(getRedGoods())}
        >
          Load red goods
        </button>

        {goodsListIsDisplaying && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;

import React from 'react';
import GoodsList from './component/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
    isGoodsLoaded: false,
  }

  fetchData = (event, getFunc) => {
    event.preventDefault();

    getFunc()
      .then(goods => this.setState({
        goods,
        isGoodsLoaded: true,
      }));
  }

  render() {
    const { goods, isGoodsLoaded } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={(event => this.fetchData(event, getAll))}
        >
          Get all goods
        </button>
        <button
          type="button"
          onClick={(event => this.fetchData(event, get5First))}
        >
          Get 5 goods
        </button>
        <button
          type="button"
          onClick={(event => this.fetchData(event, getRedGoods))}
        >
          Get red goods
        </button>

        {isGoodsLoaded
          ? <GoodsList goods={goods} />
          : 'Please press button'}
      </>
    );
  }
}
export default App;

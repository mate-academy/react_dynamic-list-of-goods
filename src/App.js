import React from 'react';
import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';
import './App.scss';

class App extends React.Component {
  state = {
    goodsFromServer: [],
  }

  getGoods = async(getGoodsCallback) => {
    const goodsFromServer = await getGoodsCallback();

    this.setState({
      goodsFromServer,
    });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.getGoods(getAll)}
        >
          Show all goods
        </button>

        <button
          type="button"
          onClick={() => this.getGoods(get5First)}
        >
          Show first 5 goods
        </button>

        <button
          type="button"
          onClick={() => this.getGoods(getRed)}
        >
          Show red goods
        </button>
        <GoodsList allGoods={this.state.goodsFromServer} />
      </>
    );
  }
}

export default App;

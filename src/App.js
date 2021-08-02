import React from 'react';
import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';
import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goodsFromServer: [],
  }

  getAllGoods = async() => {
    const goodsFromServer = await getAll();

    this.setState({
      goodsFromServer,
    });
  }

  getFirst5Goods = async() => {
    const goodsFromServer = await get5First();

    this.setState({
      goodsFromServer,
    });
  }

  getRedGood= async() => {
    const goodsFromServer = await getRed();

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
          onClick={this.getAllGoods}
        >
          Show all goods
        </button>

        <button
          type="button"
          onClick={this.getFirst5Goods}
        >
          Show first 5 goods
        </button>

        <button
          type="button"
          onClick={this.getRedGood}
        >
          Show red goods
        </button>
        <GoodsList allGoods={this.state.goodsFromServer} />
      </>
    );
  }
}

export default App;

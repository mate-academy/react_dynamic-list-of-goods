import React from 'react';
import { GoodList } from './components/GoodsList';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goodsFromServer: [],
  }

  getGoods = (goods) => {
    goods().then(products => this.setState({ goodsFromServer: products }));
  }

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="submit"
          onClick={() => this.getGoods(getAll)}
        >
          Get All
        </button>
        <button
          type="submit"
          onClick={() => this.getGoods(get5First)}
        >
          Get 5 First
        </button>
        <button
          type="submit"
          onClick={() => this.getGoods(getRedGoods)}
        >
          Get Red
        </button>
        {this.state.goodsFromServer.length > 0
      && <GoodList goods={this.state.goodsFromServer} /> }
      </div>
    );
  }
}

export default App;

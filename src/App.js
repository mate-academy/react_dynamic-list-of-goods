import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: '',
  }

  showAllGoodsButton = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  show5firstGoodsButton = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  showRedGoodsButton = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          className="button"
          type="button"
          onClick={this.showAllGoodsButton}
        >
          Load All goods
        </button>

        <button
          className="button"
          type="button"
          onClick={this.show5firstGoodsButton}
        >
          Load 5 first goods
        </button>

        <button
          className="button"
          type="button"
          onClick={this.showRedGoodsButton}
        >
          Load red goods
        </button>

        {this.state.goods.length > 0
      && <GoodsList goods={this.state.goods} />}
      </>
    );
  }
}

export default App;

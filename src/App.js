import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: '',
  }

  changeState = (goods) => {
    this.setState({ goods });
  }

  showAllButton = () => {
    getAll()
      .then(this.changeState);
  }

  show5Button = () => {
    get5First()
      .then(this.changeState);
  }

  showRedGoodsButton = () => {
    getRedGoods()
      .then(this.changeState);
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          className="button"
          type="button"
          onClick={this.showAllButton}
        >
          Load All goods
        </button>

        <button
          className="button"
          type="button"
          onClick={this.show5Button}
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

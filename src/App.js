import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: '',
  }

  showAllGoods = () => {
    getAllGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  show5firstGoods = () => {
    get5FirstGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  showRedGoods = () => {
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
          onClick={this.showAllGoods}
        >
          Load All goods
        </button>

        <button
          className="button"
          type="button"
          onClick={this.show5firstGoods}
        >
          Load 5 first goods
        </button>

        <button
          className="button"
          type="button"
          onClick={this.showRedGoods}
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

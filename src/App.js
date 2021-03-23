import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: '',
  }

  showGoods = (showSpecialGoods) => {
    showSpecialGoods()
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
          onClick={() => this.showGoods(getAllGoods)}
        >
          Load All goods
        </button>

        <button
          className="button"
          type="button"
          onClick={() => this.showGoods(get5FirstGoods)}
        >
          Load 5 first goods
        </button>

        <button
          className="button"
          type="button"
          onClick={() => this.showGoods(getRedGoods)}
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

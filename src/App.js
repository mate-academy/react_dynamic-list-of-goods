import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    rightGoods: [],
  }

  getGoods = (filter) => {
    filter()
      .then((goodsFromServer) => {
        this.setState({
          rightGoods: [...goodsFromServer],
        });
      });
  }

  render() {
    const { rightGoods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <div className="App__buttons">
          <button
            type="button"
            onClick={() => this.getGoods(getAll)}
          >
            All goods
          </button>

          <button
            type="button"
            onClick={() => this.getGoods(get5First)}
          >
            5 first goods
          </button>

          <button
            type="button"
            onClick={() => this.getGoods(getRed)}
          >
            Red goods
          </button>
        </div>

        <GoodsList
          rightGoods={rightGoods}
        />
      </>
    );
  }
}

export default App;

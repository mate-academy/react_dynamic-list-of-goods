import React, { Component } from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';
import { getGoods } from './components/GOODS_FROM_SERVER_API';

export default class App extends Component {
  state = {
    goodsList: [],
  };

  loadGoods = () => {
    getGoods()
      .then((goodsList: StateApp['goodsList']) => {
        this.setState({ goodsList });
      });
  }

  firstFiveSorted = () => {
    getGoods()
    .then((goodsList: StateApp['goodsList']) => {
      this.setState({
        goodsList: goodsList.sort((a, b) => a.name.localeCompare(b.name)).splice(0, 5),
      });
    })
  }

  showedRed = () => {
    getGoods()
    .then((goodsList: StateApp['goodsList']) => {
      this.setState({
        goodsList: goodsList.filter(good => good.color === 'red'),
      });
    })
  }

  showedAllGoods = () => {
    getGoods()
      .then((goodsList: StateApp['goodsList']) => {
        this.setState({ goodsList });
      });
  }


  render() {
    const { goodsList } = this.state;

    if (goodsList.length === 0) {
      return (
        <>
          <p>
            Load your Goods
          </p>
          <button
            type="button"
            onClick={this.loadGoods}>
            Load
          </button>
        </>
      )
    }
    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          type="button"
          onClick={this.showedAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.firstFiveSorted}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.showedRed}
        >
          Load red goods
        </button>
          <GoodsList goodsList={goodsList} />
      </div>
    );
  }
}

import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

const url = (
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json'
);

const getGoods = () => {
  const dataPromise = fetch(url).then(responce => responce.json());

  return dataPromise;
};

class App extends React.Component {
  state = {
    goodsArr: [],
    stateLoadAll: 'inline',
    stateFirstFive: 'inline',
    stateLoadRed: 'inline',
  }

  loadAll = () => {
    getGoods().then((goods) => {
      this.setState({
        goodsArr: [...goods], stateLoadAll: 'none',
      });
    });
  }

  firstFiveSort = () => {
    getGoods().then((goods) => {
      goods.sort((i, b) => i.name.localeCompare(b.name)).splice(5);
      this.setState({
        goodsArr: [...goods], stateFirstFive: 'none',
      });
    });
  }

  onlyRed = () => {
    getGoods().then((goods) => {
      const red = goods.filter(good => good.color === 'red');

      this.setState({
        goodsArr: [...red], stateLoadRed: 'none',
      });
    });
  }

  render() {
    const { goodsArr, stateLoadAll, stateFirstFive, stateLoadRed } = this.state;

    return (
      <>
        <h1>Goods</h1>
        <button
          onClick={this.loadAll}
          type="button"
          style={{ display: stateLoadAll }}
        >
          Load goods
        </button>
        <button
          onClick={this.firstFiveSort}
          type="button"
          style={{ display: stateFirstFive }}
        >
          Load 5 first goods
        </button>
        <button
          onClick={this.onlyRed}
          type="button"
          style={{ display: stateLoadRed }}
        >
          Load red goods
        </button>
        <GoodsList goodsArr={goodsArr} />
      </>
    );
  }
}

export default App;

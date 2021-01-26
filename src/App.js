import React from 'react';
import './App.scss';
import GoodsList from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAll = () => {
    getAll()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer,
        });
      });
  }

  loadFive = () => {
    get5First()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer,
        });
      });
  }

  loadRed = () => {
    getRedGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer,
        });
      });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button type="button" onClick={this.loadAll}>
          Load All goods
        </button>

        <button type="button" onClick={this.loadFive}>
          Load 5 first goods
        </button>

        <button type="button" onClick={this.loadRed}>
          Load red goods
        </button>

        <ul className="app__list">
          <GoodsList goods={this.state.goods} />
        </ul>
      </>
    );
  }
}

export default App;

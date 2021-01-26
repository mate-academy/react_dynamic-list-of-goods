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
        <h1 className="app__header">
          Dynamic list of Goods
        </h1>

        <div className="app__buttons">
          <button
            type="button"
            className="app__btn"
            onClick={this.loadAll}
          >
            Load all goods
          </button>

          <button
            type="button"
            className="app__btn"
            onClick={this.loadFive}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="app__btn"
            onClick={this.loadRed}
          >
            Load red goods
          </button>
        </div>

        <ul className="app__list">
          <GoodsList goods={this.state.goods} />
        </ul>
      </>
    );
  }
}

export default App;

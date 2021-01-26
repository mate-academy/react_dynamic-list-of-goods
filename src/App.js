import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodList';

class App extends React.Component {
  state = {
    goods: [],
  };

  setAllGoods = () => {
    getAll()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer,
        });
      });
  }

  set5Goods = () => {
    get5First()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer,
        });
      });
  }

  setRedGoods = () => {
    getRedGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          className="button"
          type="button"
          onClick={this.setAllGoods}
        >
          Load All goods
        </button>

        <button
          className="button"
          type="button"
          onClick={this.set5Goods}
        >
          Load 5 first goods
        </button>

        <button
          className="button"
          type="button"
          onClick={this.setRedGoods}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadAllGoods = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  load5FirstGoods = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  loadRedGoods = () => {
    getRed()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.loadAllGoods}
          className="App__button"
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.load5FirstGoods}
          className="App__button"
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
          className="App__button"
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;

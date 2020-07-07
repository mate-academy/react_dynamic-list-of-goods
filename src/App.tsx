import React from 'react';
import './App.css';
import { goodsFromServer } from './api';
import GoodList from './GoodList';

type State = {
  goods: Goods[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadAllGoods = () => {
    goodsFromServer().then((data) => {
      this.setState({
        goods: data,
      });
    });
  };

  loadFirstFiveGoods = () => {
    goodsFromServer().then((data) => {
      this.setState({
        goods: [...data].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
      });
    });
  };

  loadRedGoods = () => {
    goodsFromServer().then((data => {
      this.setState({
        goods: [...data].filter(good => good.color === 'red'),
      });
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <section className="wrapper">
        <h1 className="head">Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            className="button"
            onClick={this.loadAllGoods}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="button"
            onClick={this.loadFirstFiveGoods}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button"
            onClick={this.loadRedGoods}
          >
            Load red goods
          </button>
        </div>
        <div className="App">
          <GoodList goods={goods} />
        </div>
      </section>
    );
  }
}

export default App;

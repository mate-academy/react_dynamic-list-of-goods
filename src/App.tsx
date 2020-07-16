import React from 'react';
import './App.css';
import { Goods, Good } from './interface';
import List from './List';

const goodsURL = 'https://mate.academy/students-api/goods';

function getGoods <T>(): Promise<T[]> {
  return fetch(goodsURL)
    .then(response => response.json())
    .then(response => response.data);
}

class App extends React.Component <{}, Goods> {
  state: Goods = {
    goods: [],
  };

  componentDidMount() {
    this.getAllGoods();
  }

  getAllGoods = () => {
    getGoods<Good>()
      .then(response => {
        this.setState({
          goods: response,
        });
      });
  };

  getFiveFirstGoods = () => {
    getGoods<Good>()
      .then(response => {
        this.setState({
          goods: response
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 5),
        });
      });
  };

  getAllRedGoods = () => {
    getGoods<Good>()
      .then(response => {
        this.setState({
          goods: response.filter((good) => good.color === 'red'),
        });
      });
  };

  render() {
    const { goods } = this.state;

    if (goods.length > 0) {
      return (
        <section className="goods">
          <button
            type="button"
            onClick={this.getAllGoods}
            className="goods__button"
          >
            All
          </button>
          <button
            type="button"
            onClick={this.getFiveFirstGoods}
            className="goods__button"
          >
            5 first
          </button>
          <button
            type="button"
            onClick={this.getAllRedGoods}
            className="goods__button"
          >
            Red
          </button>
          <List goods={goods} />
        </section>
      );
    }

    return (
      <section className="goods">
        <button
          type="button"
          onClick={this.getAllGoods}
          className="goods__button"
        >
          All
        </button>
        <h1>Please, wait</h1>
      </section>
    );
  }
}

export default App;

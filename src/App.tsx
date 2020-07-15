import React from 'react';
import './App.css';
import { Good, State } from './interface';
import List from './List';

class App extends React.Component <{}, State> {
  state: State = {
    goods: [],
    isLoaded: false,
  };

  goodsURL = 'https://mate.academy/students-api/goods';

  componentDidMount() {
    this.getAllGoods();
  }

  getGoods = () => {
    return fetch(this.goodsURL)
      .then(response => response.json());
  };

  getAllGoods = () => {
    this.getGoods()
      .then(response => {
        this.setState({
          goods: response.data,
          isLoaded: true,
        });
      });
  };

  getFiveFirstGoods = () => {
    this.getGoods()
      .then(response => {
        this.setState({
          goods: response.data
            .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
            .slice(0, 5),
          isLoaded: true,
        });
      });
  };

  getAllRedGoods = () => {
    this.getGoods()
      .then(response => {
        this.setState({
          goods: response.data.filter((good: Good) => good.color === 'red'),
          isLoaded: true,
        });
      });
  };

  render() {
    const { goods, isLoaded } = this.state;

    if (isLoaded) {
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
        <h1>Please, wait</h1>
      </section>
    );
  }
}

export default App;

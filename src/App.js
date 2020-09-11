import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getAllHandler = () => {
    getAll()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  get5FirstHandler = () => {
    get5First()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  getRedHandler = () => {
    getRed()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    return (
      <section className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.getAllHandler}
        >
          Get all
        </button>
        <button
          type="button"
          onClick={this.get5FirstHandler}
        >
          Get five
        </button>
        <button
          type="button"
          onClick={this.getRedHandler}
        >
          Get red
        </button>
        <ul>
          {
            this.state.goods.map(good => (
              <li key={good.id}>{good.name}</li>
            ))
          }
        </ul>
      </section>
    );
  }
}

export default App;

import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import GoodsList from './Components/GoodsList/GoodsList';

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
    const { goods } = this.state;

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
        <GoodsList goods={goods} />
      </section>
    );
  }
}

export default App;

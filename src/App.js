import React from 'react';
import { ListOfGoods } from './Components/ListOfGoods';
import { getAll, get5First, getRed } from './api/goods';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  };

  handleAll = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  handleFiveGoods = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  handleRed = () => {
    getRed()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>React dynamic list of goods</h1>

        <button
          type="button"
          value={goods}
          onClick={this.handleAll}
        >
          Load All goods
        </button>
        <button
          type="button"
          value={goods}
          onClick={this.handleFiveGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          value={goods}
          onClick={this.handleRed}
        >
          Load red goods
        </button>

        <ListOfGoods goods={goods} />
      </div>
    );
  }
}

export default App;

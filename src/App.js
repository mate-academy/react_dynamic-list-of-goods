import React from 'react';

import './App.scss';

import { ListOfGoods } from './components/ListOfGoods';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  eachGood = () => {
    getAll().then(goods => this.setState({
      goods,
    }));
  };

  onlyFive = () => {
    get5First().then(goods => this.setState({
      goods,
    }));
  };

  onlyReds = () => {
    getRedGoods().then(goods => this.setState({
      goods,
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <React.Fragment>
        <h1>Dynamic List of Goods</h1>
        <button
          type="button"
          onClick={this.eachGood}
        >
          Get all the goods
        </button>

        <button
          type="button"
          onClick={this.onlyFive}
        >
          Get 5 first goods
        </button>

        <button
          type="button"
          onClick={this.onlyReds}
        >
          Get only red goods
        </button>
        {goods.length > 0 && (
          <ListOfGoods goods={goods} />
        )}
      </React.Fragment>
    );
  }
}

export default App;

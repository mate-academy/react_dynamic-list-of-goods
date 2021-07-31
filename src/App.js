import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './GoodsList';

class App extends React.PureComponent {
  state = {
    dataLoaded: false,
    arrayOfGoods: [],
  };

  loadAllGoods = () => {
    this.setState(getAll().then(array => this.setState({
      arrayOfGoods: array,
      dataLoaded: true,
    })));
  };

  loadFirstFive = () => {
    this.setState(get5First().then(array => this.setState({
      arrayOfGoods: array,
      dataLoaded: true,
    })));
  };

  loadRed = () => {
    this.setState(getRedGoods().then(array => this.setState({
      arrayOfGoods: array,
      dataLoaded: true,
    })));
  };

  render() {
    const { arrayOfGoods, dataLoaded } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          onClick={this.loadAllGoods}
          type="button"
        >
          Load all goods
        </button>
        <button
          onClick={this.loadFirstFive}
          type="button"
        >
          Load first 5 goods
        </button>
        <button
          onClick={this.loadRed}
          type="button"
        >
          Load red goods
        </button>
        {dataLoaded && (
          <GoodsList goods={arrayOfGoods} />
        )}
      </>
    );
  }
}

export default App;

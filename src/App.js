import React, { Component } from 'react';
import { GoodsList } from './components';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends Component {
  state ={
    goods: [],
  }

  loadData = async() => {
    const prepearedGoods = await getAll();

    this.setState({
      goods: prepearedGoods,
    });
  }

  ShowFiveFirstGoods = async() => {
    const prepearedGoods = await getAll()
      .then(response => get5First(response));

    this.setState({
      goods: prepearedGoods,
    });
  }

  ShowOnlyRedGoods = async() => {
    const prepearedGoods = await getAll()
      .then(response => getRedGoods(response));

    this.setState({
      goods: prepearedGoods,
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <GoodsList
          goods={goods}
        />
        <button
          className="App__button"
          type="button"
          onClick={this.loadData}
        >
          Load All goods
        </button>
        <button
          className="App__button"
          type="button"
          onClick={this.ShowFiveFirstGoods}
        >
          Load 5 first goods
        </button>
        <button
          className="App__button"
          type="button"
          onClick={this.ShowOnlyRedGoods}
        >
          Load red goods
        </button>
      </div>
    );
  }
}

export default App;

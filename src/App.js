import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import GoodsList from './components/GoodsList/GoodsList';

export class App extends React.Component {
  state = {
    goods: [],
  }

  getAllFromServer = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  get5FirstElement = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  getColorElement = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.getAllFromServer}
        >
          Get All
        </button>
        <button
          type="button"
          onClick={this.get5FirstElement}
        >
          Get five first elements
        </button>
        <button
          type="button"
          onClick={this.getColorElement}
        >
          Get red elements
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

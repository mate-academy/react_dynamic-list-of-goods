import React from 'react';

import './App.scss';

import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  getAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  };

  get5FirstGoods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  };

  getAllRedGoods = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="heading">
          Get goods from server
        </h1>

        <section className="buttons">
          <button
            type="button"
            className="button"
            onClick={this.getAllGoods}
          >
            All
          </button>

          <button
            type="button"
            className="button"
            onClick={this.get5FirstGoods}
          >
            5 first
          </button>

          <button
            type="button"
            className="button"
            onClick={this.getAllRedGoods}
          >
            In red
          </button>
        </section>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

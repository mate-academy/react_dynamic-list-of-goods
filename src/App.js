import React, { PureComponent } from 'react';
import 'bulma';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends PureComponent {
  state = {
    goods: [],
  }

  loadAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  load5Goods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  loadRedGoods = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    return (
      <section className="app">
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            className="button is-primary"
            type="button"
            onClick={this.loadAllGoods}
          >
            Load All goods
          </button>
          <button
            className="button is-primary"
            type="button"
            onClick={this.load5Goods}
          >
            Load 5 first goods
          </button>
          <button
            className="button is-primary"
            type="button"
            onClick={this.loadRedGoods}
          >
            Load red goods
          </button>
        </div>
        <ul>
          {this.state.goods.map(({ id, name, color }) => (
            <li key={id} style={{ color }}>{name}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default App;

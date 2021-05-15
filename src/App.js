import React from 'react';

import './App.scss';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadData = async(callback) => {
    const goods = await callback();

    this.setState({ goods });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Dynamic list of Goods</h1>

          <div className="content">
            <GoodsList goods={this.state.goods} />
          </div>

          <div className="buttons">
            <button
              type="button"
              className="button is-primary"
              onClick={() => this.loadData(getAll)}
            >
              Load All Goods
            </button>

            <button
              type="button"
              className="button is-primary"
              onClick={() => this.loadData(get5First)}
            >
              Load 5 First Goods
            </button>

            <button
              type="button"
              className="button is-primary"
              onClick={() => this.loadData(getRedGoods)}
            >
              Load Red Goods
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default App;

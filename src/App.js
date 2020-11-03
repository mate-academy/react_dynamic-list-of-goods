import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  setGoods = (callback) => {
    callback().then((goods) => {
      this.setState({
        goods,
      });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="app__buttons">
          <button
            className="button is-primary"
            type="button"
            onClick={() => this.setGoods(getAll)}
          >
            Load All goods
          </button>

          <button
            className="button is-primary"
            type="button"
            onClick={() => this.setGoods(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            className="button is-danger"
            type="button"
            onClick={() => this.setGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        <div className="content">
          <GoodsList goods={goods} />
        </div>
      </div>
    );
  }
}

export default App;

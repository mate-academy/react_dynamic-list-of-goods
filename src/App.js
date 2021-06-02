import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  renderGoods = (callback) => {
    callback().then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <button
          className="app__button"
          type="submit"
          onClick={() => this.renderGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          className="app__button"
          type="submit"
          onClick={() => this.renderGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          className="app__button"
          type="submit"
          onClick={() => this.renderGoods(getRedGoods)}
        >
          Load red goods
        </button>
        {!goods.length || (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;

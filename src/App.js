import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  handleLoadButton = (loadGoods) => {
    loadGoods()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="column is-half">
        <div className="box">
          <button
            type="button"
            className="button is-small is-dark mr-3"
            onClick={() => this.handleLoadButton(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="button is-small is-dark mr-3"
            onClick={() => this.handleLoadButton(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button is-small is-dark"
            onClick={() => this.handleLoadButton(getRed)}
          >
            Load red goods
          </button>

          <GoodsList goods={goods} />
        </div>
      </div>
    );
  }
}

export default App;

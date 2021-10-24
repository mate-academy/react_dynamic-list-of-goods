import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component<{}, {}> {
  state = {
    goods: [],
  };

  handleButtonAll = () => {
    getAll()
      .then(goods => this.setState({ goods }));
  };

  handleButtonFirst5 = () => {
    get5First()
      .then(goods => this.setState({ goods }));
  };

  handleButtonRed = () => {
    getRedGoods()
      .then(goods => this.setState({ goods }));
  };

  render() {
    const { goods } = this.state;
    const { handleButtonAll, handleButtonFirst5, handleButtonRed } = this;

    return (
      <div className="App container has-text-centered">
        <h1 className="title">Dynamic list of Goods</h1>
        <button
          type="button"
          className="button is-primary is-normal mr-4"
          onClick={handleButtonAll}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="button is-primary is-normal mr-4"
          onClick={handleButtonFirst5}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="button is-primary is-normal mr-4"
          onClick={handleButtonRed}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

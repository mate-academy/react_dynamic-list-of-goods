import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  setGoods = () => {
    getAll()
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  set5firsGoods = () => {
    get5First()
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  setRedGoods = () => {
    getRedGoods()
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  render() {
    const { setGoods, set5firsGoods, setRedGoods } = this;
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={setGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={set5firsGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={setRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

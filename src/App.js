import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoogsList/GoodsList';

class App extends React.Component {
  state ={
    goods: [],
  }

  listOfGoods = (functionName) => {
    functionName.then(goods => (
      this.setState({ goods })
    ));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          className="button"
          type="button"
          onClick={() => {
            this.listOfGoods(getAll());
          }}
        >
          Load All goods
        </button>
        <button
          className="button"
          type="button"
          onClick={() => {
            this.listOfGoods(get5First());
          }}
        >
          Load 5 first goods
        </button>
        <button
          className="button"
          type="button"
          onClick={() => {
            this.listOfGoods(getRedGoods());
          }}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

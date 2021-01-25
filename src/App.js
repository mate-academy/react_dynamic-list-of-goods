import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

const fiveGoods = [];
const allResult = [];
const redGoods = [];

function getArrayFromApi(func, array) {
  return func().then(res => res.map(item => array.push(item)));
}

getArrayFromApi(getAll, allResult);
getArrayFromApi(get5First, fiveGoods);
getArrayFromApi(getRedGoods, redGoods);

class App extends React.Component {
  state = {
    all: false,
    five: false,
    red: false,
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        {this.state.all && (
          <GoodsList goods={allResult} />
        )}
        {this.state.five && (
          <GoodsList goods={fiveGoods} />
        )}
        {this.state.red && (
          <GoodsList goods={redGoods} />
        )}
        <button
          type="button"
          onClick={() => {
            this.setState(state => ({
              all: !state.all,
            }));
          }}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState(state => ({
              five: !state.five,
            }));
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState(state => ({
              red: !state.red,
            }));
          }}
        >
          Load red goods
        </button>
      </>

    );
  }
}

export default App;

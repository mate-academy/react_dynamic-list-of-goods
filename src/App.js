import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <GoodsList goods={goods} />

        <button
          type="button"
          onClick={() => {
            getAll()
              .then((res) => {
                this.setState(state => ({
                  goods: res,
                }));
              });
          }}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            get5First()
              .then((res) => {
                this.setState(state => ({
                  goods: res,
                }));
              });
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => {
            getRedGoods()
              .then((res) => {
                this.setState(state => ({
                  goods: res,
                }));
              });
          }}
        >
          Load red goods
        </button>
      </>

    );
  }
}

export default App;

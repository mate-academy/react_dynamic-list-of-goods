import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './api/components/GoodsList/GoodsList';

import './App.scss';

export class App extends React.Component {
  state = {
    goods: [],
  }

  getList = (method) => {
    method()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.getList(getAll);
          }}
        >
          Get all
        </button>
        {' '}
        <button
          type="button"
          onClick={() => {
            this.getList(get5First);
          }}
        >
          Get 5 first
        </button>
        {' '}
        <button
          type="button"
          onClick={() => {
            this.getList(getRedGoods);
          }}
        >
          Get red
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

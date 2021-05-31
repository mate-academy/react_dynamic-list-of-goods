import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './Components/GoodsList/GoodsList';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  responseHandler = (request) => {
    request()
      .then(data => this.setState({ goods: [...data] }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
        <div>
          <button
            type="button"
            onClick={() => {
              this.responseHandler(getAll);
            }}
          >
            Load all goods
          </button>
          <button
            type="button"
            onClick={() => {
              this.responseHandler(get5First);
            }}
          >
            Load five first goods
          </button>
          <button
            type="button"
            onClick={() => {
              this.responseHandler(getRedGoods);
            }}
          >
            Load all red goods
          </button>
        </div>
      </>
    );
  }
}

export default App;

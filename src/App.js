import React, { PureComponent } from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends PureComponent {
 state = {
   data: [],
 }

  getGoods = (func) => {
    func()
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="open-list-buttons">
          <button
            type="button"
            onClick={() => this.getGoods(getAll)}
          >
            Show all goods
          </button>
          <button
            type="button"
            onClick={() => this.getGoods(get5First)}
          >
            Show first 5
          </button>
          <button
            type="button"
            onClick={() => this.getGoods(getRedGoods)}
          >
            Show red goods
          </button>
        </div>
        <GoodsList
          list={this.state.data}
        />
      </>
    );
  }
}

export default App;

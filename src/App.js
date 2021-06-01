import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components';

class App extends React.Component {
  state = {
    goods: [],
  }

  getAllHandler = () => {
    getAll().then(goods => this.setState({ goods }));
  }

  getFiveHandler = () => {
    get5First().then(goods => this.setState({ goods }));
  }

  getRedHandler = () => {
    getRedGoods().then(goods => this.setState({ goods }));
  }

  render() {
    return (
      <>
        {this.state.goods.length === 0
          ? (
            <>
              <button
                type="button"
                onClick={this.getAllHandler}
              >
                show all
              </button>
              <button
                type="button"
                onClick={this.getFiveHandler}
              >
                show 5
              </button>
              <button
                type="button"
                onClick={this.getRedHandler}
              >
                show red
              </button>
            </>
          )
          : (
            <>
              <h1>Dynamic list of Goods</h1>

              <GoodList goods={this.state.goods} />
              <button
                type="button"
                onClick={() => this.setState({ goods: [] })}
              >
                hide
              </button>
            </>
          )}
      </>
    );
  }
}

export default App;

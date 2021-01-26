import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showAll = () => {
    getAll().then((data) => {
      this.setState({ goods: data });
    });
  }

  show5First = () => {
    get5First().then((data) => {
      this.setState({ goods: data });
    });
  }

  showRed = () => {
    getRedGoods().then((data) => {
      this.setState({ goods: data });
    });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="wrapper">
          <button
            type="button"
            onClick={this.showAll}
          >
            Show all goods
          </button>
          <button
            type="button"
            onClick={this.show5First}
          >
            Show 5 first goods
          </button>
          <button
            type="button"
            onClick={this.showRed}
          >
            Show red goods
          </button>

          <ul>
            {this.state.goods.map(good => (
              <li
                key={good.id}
                className={good.color}
              >
                Name:
                {good.name}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;

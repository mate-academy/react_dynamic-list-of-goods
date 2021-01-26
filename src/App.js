import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showSomething = (callback) => {
    callback.then((data) => {
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
            onClick={() => this.showSomething(getAll())}
          >
            Show all goods
          </button>
          <button
            type="button"
            onClick={() => this.showSomething(get5First())}
          >
            Show 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.showSomething(getRedGoods())}
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

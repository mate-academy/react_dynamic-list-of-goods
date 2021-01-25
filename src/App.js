import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    items: [],
  }

  showAll = () => {
    getAll().then((data) => {
      this.setState({ items: data });
    });
  }

  show5First = () => {
    get5First().then((data) => {
      this.setState({ items: data });
    });
  }

  showRed = () => {
    getRedGoods().then((data) => {
      this.setState({ items: data });
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
            {this.state.items.map(user => (
              <li key={user.id}>
                ID:
                {user.id}
                Name:
                {user.name}
                Color:
                {user.color}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;

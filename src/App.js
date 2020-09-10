import React from 'react';

import './App.scss';

import { getAll } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  // eslint-disable-next-line
  showAll = async () => {
    const data = await getAll();

    this.setState({ goods: data });
  }

  // eslint-disable-next-line
  show5First = async () => {
    const data = await getAll();

    this.setState({
      goods: data
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 5),
    });
  }

  // eslint-disable-next-line
  showRed = async () => {
    const data = await getAll();

    this.setState({
      goods: data
        .filter(elem => elem.color === 'red'),
    });
  }

  render() {
    return (
      <div className="container">
        <button
          type="button"
          className="button"
          onClick={this.showAll}
        >
          Get All
        </button>

        <button
          type="button"
          className="button"
          onClick={this.show5First}
        >
          5 sorted first
        </button>

        <button
          type="button"
          className="button"
          onClick={this.showRed}
        >
          Get All
        </button>
        <ul className="goods">
          {this.state.goods.map(good => (
            <li key={good}>
              <font color={good.color}>
                {good.name}
              </font>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

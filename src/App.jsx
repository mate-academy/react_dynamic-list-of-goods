import React from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    chosenGoods: [],
    showGood: false,
  };

  handleShowAllGoods = () => {
    getAll()
      .then((chosenGoods) => {
        this.setState({
          chosenGoods,
          showGood: true,
        });
      });
  }

  handleShow5FirstGoods = () => {
    get5First()
      .then((chosenGoods) => {
        this.setState({
          chosenGoods,
          showGood: true,
        });
      });
  };

  handleShowRedGoods = () => {
    getRedGoods()
      .then((chosenGoods) => {
        this.setState({
          chosenGoods,
          showGood: true,
        });
      });
  };

  render() {
    const { chosenGoods, showGood } = this.state;

    return (
      <>
        <h1
          className="App__title"
        >
          Dynamic list of Goods
        </h1>
        <button
          type="button"
          className="App__button"
          onClick={this.handleShowAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="App__button"
          onClick={this.handleShow5FirstGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="App__button"
          onClick={this.handleShowRedGoods}
        >
          Load red goods
        </button>
        {showGood
        && (
          <ul
            className="App__list"
          >
            {chosenGoods.map(good => (
              <li
                className="App__item"
                key={good.id}
                style={{ color: good.color }}
              >
                {good.name}
              </li>
            ))}
          </ul>
        )
        }
      </>
    );
  }
}

export default App;

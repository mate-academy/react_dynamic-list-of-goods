import React from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  clickUniversalHandle = (getGoods) => {
    getGoods()
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
        <h1
          className="app__title"
        >
          Dynamic list of Goods
        </h1>
        <button
          type="button"
          className="app__button"
          onClick={() => {
            this.clickUniversalHandle(getAll);
          }}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="app__button"
          onClick={() => {
            this.clickUniversalHandle(get5First);
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="app__button"
          onClick={() => {
            this.clickUniversalHandle(getRedGoods);
          }}
        >
          Load red goods
        </button>
        {goods.length > 0
        && (
          <ul
            className="app__list"
          >
            {goods.map(good => (
              <li
                className="app__item"
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

import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './Button';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  getGoods = () => {
    getAll()
      .then(goods => this.setState({ goods }));
  }

  onlyFiveGoods = () => {
    get5First()
      .then(goods => this.setState({ goods }));
  }

  onlyRedGoods = () => {
    getRedGoods()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods </h1>
        {!!goods.length && (
          <ul>
            {goods.map(good => (
              <li key={good.id} style={{ color: good.color }}>
                {good.name}
              </li>
            ))}
          </ul>
        )}
        <Button name="Load All goods" onClick={this.getGoods} />
        <Button name="Load 5 first goods" onClick={this.onlyFiveGoods} />
        <Button name="Load red goods" onClick={this.onlyRedGoods} />

      </>
    );
  }
}

export default App;

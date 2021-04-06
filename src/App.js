import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
import { Button } from './Button';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  loadFiveGoods = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  loadRedGoods = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button
          callback={this.loadGoods}
          text="Load All goods"
        />

        <Button
          callback={this.loadFiveGoods}
          text="Load 5 first goods"
        />

        <Button
          callback={this.loadRedGoods}
          text="Load red goods"
        />

        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

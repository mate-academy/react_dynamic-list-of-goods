import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
import { Button } from './Button';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadData = (fetchedGoods) => {
    fetchedGoods()
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
          onclick={() => this.loadData(getAll)}
          text="Load All goods"
        />

        <Button
          onclick={() => this.loadData(get5First)}
          text="Load 5 first goods"
        />

        <Button
          onclick={() => this.loadData(getRedGoods)}
          text="Load red goods"
        />

        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends Component {
  state = {
    goods: [],
  }

  setGoods = (getGoods) => {
    getGoods().then((goods) => {
      this.setState({ goods });
    });
  }

  render() {
    const { goods } = this.state;
    const { setGoods } = this;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          <Button
            text="All"
            onClick={() => setGoods(getAll)}
          />
          <Button
            text="First 5"
            onClick={() => setGoods(get5First)}
          />
          <Button
            text="Red"
            onClick={() => setGoods(getRedGoods)}
          />
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends Component {
  state = {
    goods: [],
  }

  getAllAwait = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  getRedAwait = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  get5FirstAwait = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;
    const { get5FirstAwait, getAllAwait, getRedAwait } = this;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          <Button
            text="All"
            action={getAllAwait}
          />
          <Button
            text="First 5"
            action={get5FirstAwait}
          />
          <Button
            text="Red"
            action={getRedAwait}
          />
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

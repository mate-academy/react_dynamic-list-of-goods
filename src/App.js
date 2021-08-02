import React, { Component } from 'react';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends Component {
  state = {
    goods: [],
  }

  // getAllAwait = async() => {
  //   const goods = await getAll();

  //   this.setState({ goods });
  // }

  // getRedAwait = async() => {
  //   const goods = await getRedGoods();

  //   this.setState({ goods });
  // }

  // get5FirstAwait = async() => {
  //   const goods = await get5First();

  //   this.setState({ goods });
  // }

  getAwait = (func) => {
    func().then((goods) => {
      this.setState({ goods });
    });
  }

  render() {
    const { goods } = this.state;
    const { getAwait } = this;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          <Button
            text="All"
            onClick={() => getAwait(getAll)}
          />
          <Button
            text="First 5"
            onClick={() => getAwait(get5First)}
          />
          <Button
            text="Red"
            onClick={() => getAwait(getRedGoods)}
          />
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

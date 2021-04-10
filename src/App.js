import React from 'react';

import { Buttons } from './components/Buttons';
import { GoodsList } from './components/GoodsList';

import './App.scss';

export class App extends React.Component {
  state = {
    goods: [],
  }

  addGoods = async(callback) => {
    const listOfGoods = await callback();

    this.setState({ goods: listOfGoods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1>Dynamic list of goods</h1>
        <Buttons addGoods={this.addGoods} />
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

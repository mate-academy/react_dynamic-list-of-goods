import React from 'react';

import './App.scss';
import { ControlBox } from './components/ControlBox/ControlBox';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.PureComponent {
  state = {
    goods: [],
  }

  setAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  setFirst5 = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  setRed = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <ControlBox
          getAll={this.setAllGoods}
          get5First={this.setFirst5}
          getRed={this.setRed}
        />
        {this.state.goods.length > 0 ? (
          <GoodsList
            goods={this.state.goods}
          />
        ) : (
          <p>NOT LOAD</p>
        )}
      </>
    );
  }
}

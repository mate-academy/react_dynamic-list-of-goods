import React, { PureComponent } from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Buttons } from './components/Buttons';
import { GoodsList } from './components/GoodsList';

export class App extends PureComponent {
  state = {
    visible: [],
  }

  handleGetAll = async() => {
    const goods = await getAll();

    this.setState({ visible: goods });
  }

  handleGetFive = async() => {
    const goods = await get5First();

    this.setState({ visible: goods });
  }

  handleGetRed = async() => {
    const goods = await getRedGoods();

    this.setState({ visible: goods });
  }

  render() {
    const { visible } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Buttons
          handleGetAll={this.handleGetAll}
          handleGetFive={this.handleGetFive}
          handleGetRed={this.handleGetRed}
        />
        <GoodsList visible={visible} />
      </>
    );
  }
}

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
    await getAll()
      .then((goods) => {
        this.setState({
          visible: goods,
        });
      });
  }

  handleGetFive = async() => {
    await get5First()
      .then((goods) => {
        this.setState({
          visible: goods,
        });
      });
  }

  handleGetRed = async() => {
    await getRedGoods()
      .then((goods) => {
        this.setState({
          visible: goods,
        });
      });
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

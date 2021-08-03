import React from 'react';

import './App.scss';
import { ControlBox } from './components/ControlBox/ControlBox';
import { GoodsList } from './components/GoodsList';

export class App extends React.PureComponent {
  state = {
    goods: [],
  }

  getGoods = async(method) => {
    const goods = await method();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <ControlBox
          getGoods={this.getGoods}
        />
        {goods.length > 0 ? (
          <GoodsList
            goods={goods}
          />
        ) : (
          <p>NOT LOAD</p>
        )}
      </>
    );
  }
}

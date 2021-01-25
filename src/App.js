import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './GoodList';

class App extends React.Component {
  state = {
    goods: null,
  }

  getAllHandler = async() => {
    const goods = [...await getAll()];

    this.setState({
      goods,
    });
  };

  get5FirstHandler = async() => {
    const goods = await get5First();

    this.setState({
      goods,
    });
  };

  getRedHandler = async() => {
    const goods = await getRedGoods();

    this.setState({
      goods,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={this.getAllHandler}>
          getAll;
        </button>
        <button type="button" onClick={this.get5FirstHandler}>
          get5First;
        </button>
        <button type="button" onClick={this.getRedHandler}>
          getRedGoods;
        </button>
        {this.state.goods && <GoodList list={goods} />}
      </>
    );
  }
}

export default App;

import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './components/Button';
import { GoodList } from './components/GoodList';

class App extends React.Component {
  state = {
    goods: [],
  }

  getAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  get5FirstGoods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  getAllRed = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;
    const { getAllGoods, get5FirstGoods, getAllRed } = this;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button
          onClick={getAllGoods}
          text="Show all"
        />
        <Button
          onClick={get5FirstGoods}
          text="Show First Five"
        />
        <Button
          onClick={getAllRed}
          text="Show all Red"
        />
        <GoodList goods={goods} />
      </>
    );
  }
}

export default App;

import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';
import { GoodList } from './components/GoodList/GoodList';
import { ShowButton } from './components/ShowButton/ShowButton';

class App extends React.Component {
  state = {
    goods: [],
  }

  allGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  add5FirstGoods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  redGoods = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <ShowButton handler={this.allGoods} text="All goods" />
        <ShowButton handler={this.add5FirstGoods} text="Load 5 first goods" />
        <ShowButton handler={this.redGoods} text="Load red goods" />
        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;

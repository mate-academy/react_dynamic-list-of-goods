import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';
import { ButtonToShowGoods } from './components/ButtonToShowGoods';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAll = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  load5First = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  loadRedGoods = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <ButtonToShowGoods
          text="Load All goods"
          onClick={this.loadAll}
        />
        <ButtonToShowGoods
          text="Load 5 first goods"
          onClick={this.load5First}
        />
        <ButtonToShowGoods
          text="Load red goods"
          onClick={this.loadRedGoods}
        />
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

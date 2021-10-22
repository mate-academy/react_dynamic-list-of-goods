import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[],
}

export default class App extends React.Component<{}, State> {
  state:State = {
    goods: [],
  };

  selectAllGoods = async () => {
    const res = await getAll();

    await this.setState({ goods: res });
  };

  select5FirstGoods = async () => {
    const res = await get5First();

    await this.setState({ goods: res });
  };

  selectRedGoods = async () => {
    const res = await getRedGoods();

    await this.setState({ goods: res });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <button
          type="button"
          onClick={this.selectAllGoods}
        >
          Load All Goods
        </button>
        <button
          type="button"
          onClick={this.select5FirstGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.selectRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

import React from 'react';
import { GoodsListButtons } from './components/GoodsListButtons';
import { GoodsList } from './GoodsList';

import './App.scss';

type State = {
  goods: Good[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadData = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>

        <GoodsListButtons loadData={this.loadData} />

        <GoodsList goods={goods} />
      </div>
    );
  }
}

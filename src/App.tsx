import React from 'react';
import './App.scss';

import { GoodsButtons } from './components/GoodsButtons';
import { GoodsList } from './components/GoodsList/GoodsList';

type Props = {};
type State = {
  goods: Good[],
};

export class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({
      goods: [...goods],
    });
  };

  render(): React.ReactNode {
    const { goods } = this.state;

    return (
      <div className="main">
        <h1>Dynamic list of Goods</h1>
        <GoodsButtons loadGoods={this.loadGoods} />
        <GoodsList goods={goods} />
      </div>
    );
  }
}

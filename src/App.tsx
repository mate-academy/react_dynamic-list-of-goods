import React from 'react';
import './App.scss';

import { getAll } from './api/goods';
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

  async componentDidMount() {
    const goods = await getAll();

    this.setState({
      goods: [...goods],
    });
  }

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({
      goods: [...goods],
    });
  };

  render() {
    const { goods } = this.state;

    // eslint-disable-next-line no-console
    console.log('goods', goods);

    return (
      <div>
        <h1>Goods</h1>
        <GoodsButtons loadGoods={this.loadGoods} />
        <GoodsList goods={goods} />
      </div>
    );
  }
}

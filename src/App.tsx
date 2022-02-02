import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodsList';
import { GoodsButtons } from './components/GoodsButtons';
import { getAllGoods } from './api/goods';
import { AddGoodForm } from './components/AddGoodForm';

type Props = {};

type State = {
  goods: Good[],
};

export class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  async componentDidMount() {
    const goods = await getAllGoods();

    this.setState({ goods: [...goods] });
  }

  componentDidUpdate(_: Props, prevState: State) {
    if (prevState.goods !== this.state.goods) {
      // eslint-disable-next-line no-console
      console.log('NEW GOODS');
    }
  }

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({ goods: [...goods] });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <GoodsButtons loadGoods={this.loadGoods} />
        {goods.length > 0 && (
          <GoodList goods={goods} />
        )}
        <AddGoodForm />
      </div>
    );
  }
}

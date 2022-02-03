import React from 'react';
import './App.scss';
import { getAllGoods } from './api/goods';
import { GoodsButtons } from './components/GoodsButtons';

type Props = {};
type State = {
  goods: Good[],
  error: boolean,
};

export class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
    error: false,
  };

  async componentDidMount() {
    try {
      const goods = await getAllGoods();

      this.setState({
        goods: [...goods],
      });
    } catch (e) {
      this.setState({
        error: true,
      });
    }
  }

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({
      goods: [...goods],
    });
  };

  render() {
    const { goods, error } = this.state;

    // eslint-disable-next-line no-console
    console.log('goods', goods);

    if (error) {
      return (
        <div>error</div>
      );
    }

    return (
      <div>
        <h1>Goods</h1>
        <GoodsButtons loadGoods={this.loadGoods} />
      </div>
    );
  }
}

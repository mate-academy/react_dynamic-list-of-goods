import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type Good = {
  id: number,
  name: string,
  color: string,
};

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  getGoodsHandler = async (getGoods: Promise<Good[]>) => {
    const goods = await getGoods;

    this.setState({
      goods: [...goods],
    });
  };

  render() {
    return (
      <div className="container">
        <button
          type="button"
          className="button"
          onClick={() => this.getGoodsHandler(getAll())}
        >
          All Goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.getGoodsHandler(get5First())}
        >
          Get 5 first
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.getGoodsHandler(getRedGoods())}
        >
          get Red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;

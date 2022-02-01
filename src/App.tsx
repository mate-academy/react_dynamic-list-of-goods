import React from 'react';
import './App.scss';
import { GoodsList } from './Component/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type Props = {};
type State = {
  goods: Good[]
};

class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  handleButton = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          className="ui brown basic button"
          type="button"
          onClick={() => this.handleButton(getAll)}
        >
          Load All goods
        </button>

        <button
          className="ui brown basic button"
          type="button"
          onClick={() => this.handleButton(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="ui brown basic button"
          type="button"
          onClick={() => this.handleButton(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

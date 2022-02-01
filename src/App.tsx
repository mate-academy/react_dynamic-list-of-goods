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

  showAllGoods = async () => {
    const goods = await getAll();

    this.setState({
      goods,
    });
  };

  showFirstFive = async () => {
    const goods = await get5First();

    this.setState({
      goods,
    });
  };

  showRed = async () => {
    const goods = await getRedGoods();

    this.setState({
      goods,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          className="ui brown basic button"
          type="button"
          onClick={this.showAllGoods}
        >
          Load All goods
        </button>

        <button
          className="ui brown basic button"
          type="button"
          onClick={this.showFirstFive}
        >
          Load 5 first goods
        </button>

        <button
          className="ui brown basic button"
          type="button"
          onClick={this.showRed}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

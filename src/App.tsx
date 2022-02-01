import React from 'react';
import './App.scss';
import { GoodsList } from './component/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  showAllGoods = async () => {
    const goods = await getAll();

    this.setState({
      goods,
    });
  };

  showFirstFiveGoods = async () => {
    const goods = await get5First();

    this.setState({
      goods,
    });
  };

  showRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({
      goods,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>
        <button
          className="btn btn-info"
          type="button"
          onClick={this.showAllGoods}
        >
          Load All goods
        </button>

        <button
          className="btn btn-success"
          type="button"
          onClick={this.showFirstFiveGoods}
        >
          Load 5 first goods
        </button>

        <button
          className="btn btn-danger"
          type="button"
          onClick={this.showRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

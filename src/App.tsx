import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRed } from './api/goods';

type State = {
  goods: Good[];
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

  showAllRedGoods = async () => {
    const goods = await getRed();

    this.setState({
      goods,
    });
  };

  render() {
    return (
      <div className="container pt-5">
        <h1 className="title has-text-centered">Dynamic list of Goods</h1>
        <div className="has-text-centered">
          <button
            className="button is-primary"
            type="button"
            onClick={this.showAllGoods}
          >
            Load All goods
          </button>

          <button
            className="button is-success"
            type="button"
            onClick={this.showFirstFiveGoods}
          >
            Load 5 first goods
          </button>

          <button
            className="button is-danger"
            type="button"
            onClick={this.showAllRedGoods}
          >
            Load red goods
          </button>
        </div>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;

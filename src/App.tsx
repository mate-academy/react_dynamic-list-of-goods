import React from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodList } from './component/GoodList';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadAllGoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  load5First = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  loadRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="d-flex flex-column align-items-center">
        <h1>Dynamic list of Goods</h1>
        <div className="btn-group buttons" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.loadAllGoods}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.load5First}
          >
            Load 5 First
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.loadRedGoods}
          >
            RedGoods
          </button>
        </div>
        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good [];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  showAllGoods = async () => {
    const allGoods = await getAll();

    this.setState({
      goods: allGoods,
    });
  };

  showFirstFiveGoods = async () => {
    const firstFiveGoods = await get5First();

    this.setState({
      goods: firstFiveGoods,
    });
  };

  showRedGoods = async () => {
    const redGoods = await getRedGoods();

    this.setState({
      goods: redGoods,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
        <div className="btn-group">
          <button
            className="btn btn-success"
            type="button"
            onClick={this.showAllGoods}
          >
            Load All goods
          </button>
          <button
            className="btn btn-primary"
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
        </div>
      </div>
    );
  }
}

export default App;

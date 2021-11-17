import React from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { ListOfGoods } from './components/ListOfGoods';

interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  getAllGoods = async () => {
    const allGoods = await getAll();

    this.setState({
      goods: allGoods,
    });
  };

  get5Goods = async () => {
    const fiveGoods = await get5First();

    this.setState({
      goods: fiveGoods,
    });
  };

  getRedGoods = async () => {
    const redGoods = await getRed();

    this.setState({
      goods: redGoods,
    });
  };

  render() {
    return (
      <div className="App">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this.getAllGoods}
        >
          getAll
        </button>

        <button
          className="btn btn-secondary"
          type="button"
          onClick={this.get5Goods}

        >
          get5First
        </button>

        <button
          className="btn btn-secondary"
          type="button"
          onClick={this.getRedGoods}

        >
          getRed
        </button>
        <ListOfGoods goods={this.state.goods} />
      </div>
    );
  }
}

export default App;

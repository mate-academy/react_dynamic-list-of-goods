import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
  showGoods: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    showGoods: [],
  };

  async componentDidMount() {
    const goods = await getAll();

    this.setState({ goods });
  }

  allGoods = () => {
    this.setState(state => ({
      showGoods: state.goods,
    }));
  };

  firstFive = () => {
    this.setState(state => ({
      showGoods: get5First(state.goods),
    }));
  };

  redGoods = () => {
    this.setState(state => ({
      showGoods: getRedGoods(state.goods),
    }));
  };

  render() {
    const { showGoods } = this.state;

    return (
      <div className="container">
        <h1 className="container__title">Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            className="button"
            onClick={this.allGoods}
          >
            All
          </button>

          <button
            type="button"
            className="button"
            onClick={this.firstFive}
          >
            5
          </button>
          <button
            type="button"
            className="button"
            onClick={this.redGoods}
          >
            Red
          </button>
        </div>

        <GoodsList goods={showGoods} />
      </div>
    );
  }
}

export default App;

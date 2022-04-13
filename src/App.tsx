import React from 'react';
import './App.scss';
import GoodList from './components/GoodList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  setAllGoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  set5First = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  setRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            className="btn"
            onClick={this.setAllGoods}
          >
            Load all goods
          </button>

          <button
            type="button"
            className="btn"
            onClick={this.set5First}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="btn"
            onClick={this.setRedGoods}
          >
            Load red goods
          </button>
        </div>

        <GoodList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;

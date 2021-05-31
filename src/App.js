import React from 'react';

import './App.scss';
import { ListOfGoods } from './ListOfGoods';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  selectAllGoods = () => {
    getAll().then(goods => this.setState({
      goods,
    }));
  };

  selectFirstFiveGoods = () => {
    get5First()
      .then(goods => this.setState({ goods }));
  };

  selectRedGoods = () => {
    getRedGoods().then(goods => this.setState({
      goods,
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic List of Goods</h1>
        <button
          type="button"
          onClick={this.selectAllGoods}
        >
          Show all the goods
        </button>

        <button
          type="button"
          onClick={this.selectFirstFiveGoods}
        >
          Show 5 first goods
        </button>

        <button
          type="button"
          onClick={this.selectRedGoods}
        >
          Show only red goods
        </button>
        {goods.length > 0 && (
          <ListOfGoods goods={goods} />
        )}
      </div>
    );
  }
}

export default App;

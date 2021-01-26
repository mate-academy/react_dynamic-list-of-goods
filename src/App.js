import React from 'react';

import './App.scss';

import { ListOfGoods } from './components/ListOfGoods';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  setAllGoods = () => {
    getAll().then(goods => this.setState({
      goods,
    }));
  };

  setFirstFiveGoods = () => {
    get5First()
      .then(goods => this.setState({ goods }));
  };

  setRedOnlyGoods = () => {
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
          onClick={this.setAllGoods}
        >
          Get all the goods
        </button>

        <button
          type="button"
          onClick={this.setFirstFiveGoods}
        >
          Get 5 first goods
        </button>

        <button
          type="button"
          onClick={this.setRedOnlyGoods}
        >
          Get only red goods
        </button>
        {goods.length > 0 && (
          <ListOfGoods goods={goods} />
        )}
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import { ListOfGoods } from './ListOfGoods';

// import { getAll, get5First, getRed } from './api/goods';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  usersResult = () => {
    return (
      getAll()
        .then(goods => {
          this.setState({ goods });
        })
    );
  };

  firstFive = () => {
    get5First()
      .then(goods => {
        this.setState({ goods });
      });
  };

  onlyRed = () => {
    getRedGoods()
      .then(goods => {
        this.setState({ goods });
      });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="button-block">
          <button
            type="button"
            className="button"
            onClick={this.usersResult}
          >
            All
          </button>
          <button
            type="button"
            className="button"
            onClick={this.firstFive}
          >
            First 5
          </button>
          <button
            type="button"
            className="button"
            onClick={this.onlyRed}
          >
            Only red
          </button>
        </div>
        <ListOfGoods goods={this.state.goods} />
      </>
    );
  }
}

export default App;

import React from 'react';

import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  };

  clickHandler = ({ target }) => {
    switch (target.name) {
      case 'first5':
        get5First()
          .then(goods => this.setState({ goods }));

        break;
      case 'red':
        getRed()
          .then(goods => this.setState({ goods }));

        break;
      default:
        getAll()
          .then(goods => this.setState({ goods }));
    }
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button name="all" type="button" onClick={this.clickHandler}>
          Load All goods
        </button>
        <button name="first5" type="button" onClick={this.clickHandler}>
          Load 5 first goods
        </button>
        <button name="red" type="button" onClick={this.clickHandler}>
          Load red goods
        </button>
        {goods.length
          ? <GoodsList goods={goods} />
          : <p>No goods</p>
        }
      </>
    );
  }
}

export default App;

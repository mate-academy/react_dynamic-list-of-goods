import React from 'react';
import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { GoodList } from './GoodList';

class App extends React.Component {
  state = {
    goods: [],
  }

  allGoods = () => {
    getAll()
      .then(goods => this.setState({
        goods,
      }));
  };

  firstFive = () => {
    get5First()
      .then(first5goods => this.setState({
        goods: first5goods,
      }));
  };

  onlyRed = () => {
    getRed()
      .then(redGoods => this.setState({
        goods: redGoods,
      }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="Goods">
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={this.allGoods}> Get All</button>
        <button type="button" onClick={this.firstFive}>Get 5 first</button>
        <button type="button" onClick={this.onlyRed}>get Red</button>

        {goods.length > 0 && <GoodList goods={goods} />}
      </div>

    );
  }
}

export default App;

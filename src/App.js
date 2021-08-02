import React from 'react';
import { GoodsList } from './GoodsList';
import { Button } from './Button';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showAll = () => {
    this.saveData(getAll);
  }

  showFive = () => {
    this.saveData(get5First);
  }

  showRed = () => {
    this.saveData(getRedGoods);
  }

  saveData(data) {
    data()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <div>
        <h1>
          Dynamic list of Goods
        </h1>
        <Button
          text="Load All goods"
          onClick={this.showAll}
        />
        <Button
          text="Load 5 first goods"
          onClick={this.showFive}
        />
        <Button
          text="Load red goods"
          onClick={this.showRed}
        />
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;

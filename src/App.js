import React from 'react';
import { GoodsList } from './GoodsList/GoodsList';
import { Button } from './Button/Button';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  getAllGoods = () => {
    getAll()
      .then(response => this.setState({
        goods: response,
      }));
  };

  getFiveGoods = () => {
    get5First()
      .then(response => this.setState({
        goods: response,
      }));
  };

  getOnlyRedGoods = () => {
    getRedGoods()
      .then(response => this.setState({
        goods: response,
      }));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <div>
          <Button
            name="Load All goods"
            onShow={this.getAllGoods}
          />
          <Button
            name="Load 5 first goods"
            onShow={this.getFiveGoods}
          />
          <Button
            name="Load red goods"
            onShow={this.getOnlyRedGoods}
          />
        </div>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;

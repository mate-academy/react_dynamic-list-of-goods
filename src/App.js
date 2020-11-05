import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './components/Button/Button';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAllGoods = () => {
    getAll().then(goods => this.setState({ goods }));
  }

  load5First = () => {
    get5First().then(goods => this.setState({ goods }));
  }

  loadRedGoods = () => {
    getRedGoods().then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="section is-center">
        <h1 className="title">Dynamic list of Goods</h1>
        <div className="buttons">
          <Button name="Load All goods" onClick={this.loadAllGoods} />
          <Button name="Load 5 first goods" onClick={this.load5First} />
          <Button name="Load red goods" onClick={this.loadRedGoods} />
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

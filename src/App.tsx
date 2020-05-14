import React from 'react';
import './App.css';
import GoodsList from './components/GoodList'
import { getGoods } from './api/goods';

interface Good {
  id: number;
  name: string;
  color: string;
}

type AppState = {
  goods: Good[];
}

class App extends React.Component<{}, AppState> {
  state = {
    goods: [],
  }

  setGoods = (goods: Good[]) => {
    this.setState({goods})
  }

  loadAllGoods = () => {
    getGoods()
    .then(this.setGoods)
  }

  loadRedGoods = () => {
    getGoods()
    .then(goods => {
      this.setGoods(
        goods.filter(good => good.color === 'red')
      )
    })
  }

  loadFirst5Goods = () => {
    getGoods()
    .then((goods: Good[]) => goods.slice(0, 5))
    .then(this.setGoods)
  }

  render () {
    return (
      <>
        <h1>Dinamic list of Goods</h1>

        <button type="button" onClick={this.loadAllGoods}>Load all</button>
        <button type="button" onClick={this.loadRedGoods}>Load red</button>
        <button type="button" onClick={this.loadFirst5Goods}>Load 5 first</button>

        <GoodsList goods={this.state.goods} />
      </>
    )
  }

};

export default App;

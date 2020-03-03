import React, { Component } from 'react';
import './App.css';
import { GoodsList } from './GoodsList/GoodsList';
import { Good } from './react-app-env';

const API_URL: string = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const getGoods = () => {
  return fetch(API_URL).then(res => res.json())
}

interface State {
  listOfGoods: Good[]
}

export class App extends Component<{}, State> {
  state: State = {
    listOfGoods: [],
  }

  loadAllGoods = () => {
    getGoods().then(goods => {
      this.setState({
        listOfGoods: goods,
      })
    })
  }

  loadFirstFiveGood = () => {
    getGoods().then(goods => {
      this.setState({
        listOfGoods: goods.filter((good: {id: number}) => good.id <= 5),
      })
    })
  }

  loadRedGood = () => {
    getGoods().then(goods => {
      this.setState({
        listOfGoods: goods.filter((good: {color: string}) => good.color === 'red'),
      })
    })
  }

  render() {
    const { listOfGoods } = this.state;

    return (
      <div>
          <GoodsList goods={listOfGoods}/>

          <button
            type="button"
            onClick={this.loadAllGoods}
          >
            Load all goods
          </button>

          <button
            type="button"
            onClick={this.loadFirstFiveGood}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            onClick={this.loadRedGood}
          >
            Load red goods
          </button>
      </div>
    );
  }
};

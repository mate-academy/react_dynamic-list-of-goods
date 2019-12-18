import React, { Component } from 'react';
import './App.css';
import GoodsList from './components/GoodsList';
import { fetchData } from './api/Fetching/Fetching';

const goodsUrl
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export default class App extends Component {
  state = {
    goodsList: [],
    visibleGoods: [],
    buttonStatus: 'visible',
  };

  componentDidMount() {
    this.fetchGoods();
  }

  fetchGoods = () => {
    fetchData(goodsUrl)
      .then(data => this.setState({
        goodsList: data,
      }));
  };

  showAllGoods = () => {
    this.setState(state => ({
      buttonStatus: 'unvisible',
      visibleGoods: [...state.goodsList],
    }));
  };

  showFirstGoods = () => {
    this.setState(state => ({
      visibleGoods: [...state.goodsList.filter(item => item.id < 6)],
    }));
  };

  showRedGoods = () => {
    this.setState(state => ({
      visibleGoods: [...state.goodsList.filter(item => item.color === 'red')],
    }));
  };

  render() {
    const { buttonStatus, visibleGoods } = this.state;

    return (
      <>
        <button
          className={buttonStatus}
          onClick={this.showAllGoods}
          type="button"
        >
          Show Goods
        </button>

        <button
          onClick={this.showFirstGoods}
          type="button"
        >
          Show First Five Goods
        </button>

        <button
          type="button"
          onClick={this.showRedGoods}
        >
          Show red Goods
        </button>

        <GoodsList listOfGoods={visibleGoods} />
      </>
    );
  }
}

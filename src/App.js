import React, { Component } from 'react';
import './App.css';
import GoodsList from './Components/GoodsList';
import { fetchData } from './Components/Fetch';
import Button from './Components/Button';

const url
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export default class App extends Component {
  state = {
    goodsList: [],
    visibleList: [],
    activeShowAll: false,
    activeShowFive: false,
    activeShowRed: false,
  };

  componentDidMount() {
    this.fetchGoods();
  }

  fetchGoods = () => {
    fetchData(url)
      .then(data => this.setState({
        goodsList: data,
      }));
  };

  showAllGoods = () => {
    this.setState(state => ({
      activeShowAll: true,
      activeShowFive: false,
      activeShowRed: false,
      visibleList: [...state.goodsList],
    }));
  };

  showFirstGoods = () => {
    this.setState(state => ({
      activeShowAll: false,
      activeShowFive: true,
      activeShowRed: false,
      visibleList: [...state.goodsList.filter(item => item.id < 6)],
    }));
  };

  showRedGoods = () => {
    this.setState(state => ({
      activeShowAll: false,
      activeShowFive: false,
      activeShowRed: true,
      visibleList: [...state.goodsList.filter(item => item.color === 'red')],
    }));
  };

  render() {
    const {
      activeShowAll,
      activeShowFive,
      activeShowRed,
      visibleList,
    } = this.state;

    return (
      <>
        <Button
          onClick={this.showAllGoods}
          active={activeShowAll}
        >
          All Goods
        </Button>

        <Button
          onClick={this.showFirstGoods}
          active={activeShowFive}
        >
          First Five Goods
        </Button>

        <Button
          onClick={this.showRedGoods}
          active={activeShowRed}
        >
          Red Goods
        </Button>

        <GoodsList listOfGoods={visibleList} />
      </>
    );
  }
}

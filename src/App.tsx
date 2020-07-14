import React, { Component } from 'react';
import './App.css';
import { loadData } from './Components/api/api';
import { Good, Pattern } from './Components/interfaces/interfaces';
import { GoodsList } from './Components/GoodsList/GoodsList';
import { FilterButtons } from './Components/FilterButtons/FilterButtons';

interface State {
  goods: Good[];
}

interface Item {
  data: Good[];
}

export class App extends Component {
  state: State = {
    goods: [],
  };

  componentDidMount() {
    loadData<Item>().then(item => {
      this.setState({
        goods: [...item.data],
      });
    });
  }

  onFilteredGoods = (filterPattern: Pattern): void => {
    loadData<Item>().then(item => {
      this.setState({
        goods: [...item.data].filter(filterPattern),
      });
    });
  };

  render() {
    const { goods } = this.state;
    const { onFilteredGoods } = this;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goodsList={goods} />
        <FilterButtons onFilteredGoods={onFilteredGoods} />
      </>
    );
  }
}

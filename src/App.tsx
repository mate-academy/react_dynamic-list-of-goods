import React, { Component } from 'react';
import './App.css';
import { loadData } from './Components/api/api';
import { Good, FilterPattern, SortPattern } from './Components/interfaces/interfaces';
import { GoodsList } from './Components/GoodsList/GoodsList';
import { FilterButtons } from './Components/FilterButtons/FilterButtons';

interface State {
  goods: Good[];
}

interface Item {
  data: Good[];
}

export class App extends Component<{}, State> {
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

  onFilteredGoods = (filterPattern: FilterPattern, sorting?: SortPattern): void => {
    loadData<Item>().then(item => {
      this.setState(() => {
        const { data } = item;

        if (sorting) {
          data.sort(sorting);
        }

        return {
          goods: data.filter(filterPattern),
        };
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

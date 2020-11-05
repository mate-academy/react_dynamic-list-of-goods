import React, { PureComponent } from 'react';
import GoodsList from './components/GoodsList';
import getInfo from './components/helpers';
import './App.scss';
// eslint-disable-next-line max-len
const BASE_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

class App extends PureComponent {
  state = {
    goodsToRender: [],
    goodsFromServer: [],
  }

  async componentDidMount() {
    const goodsFromServer = await getInfo(BASE_URL);

    this.setState({ goodsFromServer });
  }

  loadAllGoods = () => {
    const goods = [...this.state.goodsFromServer];

    this.setState(state => ({
      goodsToRender: goods,
    }));
  }

  sortByNameGoods = () => {
    const sortedGoods = [...this.state.goodsFromServer]
      .sort((currGood, nextGood) => currGood.name.localeCompare(nextGood.name));

    sortedGoods.length = 5;
    this.setState(state => ({
      goodsToRender: sortedGoods,
    }));
  }

  filterByColorGoods = () => {
    const filteredGoods = [...this.state.goodsFromServer]
      .filter(good => good.color === 'red');

    this.setState(state => ({
      goodsToRender: filteredGoods,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="ui buttons">
          <button
            className="ui button"
            onClick={this.loadAllGoods}
            type="button"
          >
            Load All goods
          </button>
          <button
            className="ui button"
            onClick={this.sortByNameGoods}
            type="button"
          >
            Load 5 first goods
          </button>
          <button
            className="ui button"
            onClick={this.filterByColorGoods}
            type="button"
          >
            Load red goods
          </button>
        </div>
        {this.state.goodsToRender
        && (
          <GoodsList
            goods={this.state.goodsToRender}
          />
        )
        }
      </div>
    );
  }
}

export default App;

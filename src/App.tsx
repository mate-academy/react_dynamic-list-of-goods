import React from 'react';
import './App.css';
import { GoodsList } from './GoodList';
import { GoodListItem, AppState } from './Interfaces';

const API_URL = 'https://mate.academy/students-api/goods';

const itemsPromise = fetch(API_URL).then(response => response.json());

class App extends React.Component<{}, AppState> {
  state = {
    goods: [],
  };

  showFiveGoods = () => {
    itemsPromise.then(data => this.setState({
      goods: data.data
        .sort((a: GoodListItem, b: GoodListItem) => a.name.localeCompare(b.name))
        .slice(0, 5),
    }));
  };

  showAllGoods = () => {
    itemsPromise.then(data => this.setState({
      goods: data.data,
    }));
  };

  showRedGoods = () => {
    itemsPromise.then(data => this.setState({
      goods: data.data.filter((good: GoodListItem) => good.color === 'red'),
    }));
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={this.showAllGoods}>Load All goods</button>
        <button type="button" onClick={this.showFiveGoods}>Load 5 first goods</button>
        <button type="button" onClick={this.showRedGoods}>Load red goods</button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

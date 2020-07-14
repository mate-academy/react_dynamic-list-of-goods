import React from 'react';
import './App.css';
import { GoodsList } from './GoodList';
import { GoodListItem } from './Interfaces';
import { loadGoods } from './api';

interface State {
  goods: Array<GoodListItem>;
}
class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  showFiveGoods = () => {
    loadGoods().then(data => this.setState({
      goods: [...data.data]
        .sort((item: GoodListItem, nextItem: GoodListItem) => (
          item.name.localeCompare(nextItem.name)))
        .slice(0, 5),
    }));
  };

  showAllGoods = () => {
    loadGoods().then(data => this.setState({
      goods: data.data,
    }));
  };

  showRedGoods = () => {
    loadGoods().then(data => this.setState({
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

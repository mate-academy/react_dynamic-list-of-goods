import React from 'react';
import './App.css';
import { GoodsList, Good } from './components/GoodsList/GoodsList';
import { Button } from './components/Button/Button';
import { getGoods } from './api';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  showAllGoods = () => {
    const goods = getGoods();

    goods
      .then(data => this.setState({
        goods: data,
      }));
  };

  showFiveGoods = () => {
    const goods = getGoods();

    goods
      .then(data => this.setState({
        goods: data.sort((a: Good, b: Good) => a.name.localeCompare(b.name))
          .slice(0, 5),
      }));
  };

  showRedGoods = () => {
    const goods = getGoods();

    goods
      .then(data => this.setState({
        goods: data.filter((good: Good) => good.color === 'red'),
      }));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button onClick={this.showAllGoods}>Show All</Button>
        <Button onClick={this.showFiveGoods}>Show Top 5</Button>
        <Button onClick={this.showRedGoods}>Show Red</Button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Button } from './components/Button/Button';

const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const getGoodsFromServer = () => {
  const getGoods = fetch(URL)
    .then(response => response.json());

  return getGoods;
};

interface State {
  goods: {id: number; name: string; color: string}[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  showAllGoods = () => {
    const getGoods = getGoodsFromServer();

    getGoods
      .then(data => this.setState({
        goods: data,
      }));
  };

  showFiveGoods = () => {
    const getGoods = getGoodsFromServer();

    getGoods
      .then(data => this.setState({
        goods: data.sort((a: {name: string}, b: {name: string}) => a.name.localeCompare(b.name))
          .slice(0, 5),
      }));
  };

  showRedGoods = () => {
    const getGoods = getGoodsFromServer();

    getGoods
      .then(data => this.setState({
        goods: data.filter((good: { color: string }) => good.color === 'red'),
      }));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button clickHandler={this.showAllGoods}>Show All</Button>
        <Button clickHandler={this.showFiveGoods}>Show Top 5</Button>
        <Button clickHandler={this.showRedGoods}>Show Red</Button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

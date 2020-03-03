import React, { Component } from 'react';
import './App.css';
import { ListOfGoods } from './Components/ListOfGoods/ListOfGoods';
import { Buttons } from './Components/Buttons/Buttons';

const goodsUrl = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';
const getGoods = () => {
  const dataPromise = fetch(goodsUrl)
    .then(response => response.json());

  return dataPromise;
};

interface State {
  goods: { id: number; name: string; color: string }[];
}

class App extends Component<{}, State> {
  state = {
    goods: [],
  };

  loadAllGoods = () => {
    getGoods().then(goods => this.setState({ goods }));
  };

  loadFiveFirstGoods = () => {
    getGoods().then((goods: State['goods']) => {
      this.setState(({
        goods: goods
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter(good => good.id < 6),
      }));
    });
  };

  loadRedGood = () => {
    getGoods().then(goods => {
      this.setState({
        goods: goods.filter((good: {color: string}) => good.color === 'red'),
      });
    });
  };

  render() {
    const { goods } = this.state;

    console.log(goods);

    return (
      <div className="App">
        <h1>List of goods</h1>
        <Buttons
          loadAllGoods={this.loadAllGoods}
          loadFiveFirstGoods={this.loadFiveFirstGoods}
          loadRedGoods={this.loadRedGood}
        />
        {goods.length > 0 && <ListOfGoods goods={goods} />}
      </div>
    );
  }
}

export default App;

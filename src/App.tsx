import React, { Component } from 'react';
import './App.css';
import { ListOfGoods } from './Components/ListOfGoods/ListOfGoods';
import { Buttons } from './Components/Buttons/Buttons';
import { getGoods } from './api/utils/getGoods';

interface State {
  goods: Good[];
}

export class App extends Component<{}, State> {
  state = {
    goods: [],
  };

  loadAllGoods = () => {
    getGoods().then(goods => this.setState({ goods }));
  };

  loadFiveFirstGoods = () => {
    getGoods().then((goods) => {
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

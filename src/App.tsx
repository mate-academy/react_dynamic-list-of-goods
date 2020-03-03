import React, { Component } from 'react';
import { GoodList } from './components/GoodsList';
import { getGoods } from './getGoods';
import './App.css';

interface State {
  goods: Good[];
}

class App extends Component<{}, State> {
  state = {
    goods: [],
  };

  handleStart = () => {
    getGoods()
      .then(goods => {
        this.setState({ goods });
      });
  };

  handleFirstFive = async () => {
    const goods = await getGoods();
    const fivesGoods = goods.slice(0, 5);

    this.setState({
      goods: fivesGoods,
    });
  };

  handleColorGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods: goods.filter((good) => good.color === 'red'),
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <button type="button" onClick={this.handleStart}>Load All goods</button>
        <button type="button" onClick={this.handleFirstFive}>Load 5 first goods</button>
        <button type="button" onClick={this.handleColorGoods}>Load red goods</button>
        <GoodList
          goods={goods}
        />
      </>
    );
  }
}

export default App;

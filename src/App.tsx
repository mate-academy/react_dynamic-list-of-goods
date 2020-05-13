import React, { Component } from 'react';
import './App.css';
import { getGoodsList } from './helpers/api';
import { GoodsList } from './components/GoodsList/GoodsList';

type State = {
  goods: Goods[];
};

type Props = {};

class App extends Component<Props, State> {
  state = {
    goods: [],
  };

  loadAllGoods = () => {
    getGoodsList()
      .then(data => {
        this.setState({
          goods: data,
        });
      });
  };

  loadFiveGoods = () => {
    getGoodsList()
      .then(data => {
        this.setState({
          goods: data.slice(0, 5).sort((a: { name: string }, b: { name: string }) => (
            a.name.localeCompare(b.name)
          )),
        });
      });
  };

  loadRedGoods = () => {
    getGoodsList()
      .then(data => {
        this.setState({
          goods: data.filter((item: { color: string }) => item.color === 'red'),
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        {(
          !!goods.length
          && <GoodsList goods={goods} />
        )}
        <button type="button" onClick={this.loadAllGoods}>Load All goods</button>
        <button type="button" onClick={this.loadFiveGoods}>Load 5 first goods</button>
        <button type="button" onClick={this.loadRedGoods}>Load red goods</button>
      </>
    );
  }
}

export default App;

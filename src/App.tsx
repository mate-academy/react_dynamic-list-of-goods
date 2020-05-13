import React, { Component } from 'react';
import './App.css';
import { GoodList } from './components/GoodList';
import { getGoodsFromApi } from './components/api';
import { Button } from './components/Button';

interface State {
  goods: Goods[];
  loading: boolean;
  hasError: boolean;
}

class App extends Component {
  state: State = {
    goods: [],
    loading: false,
    hasError: false,
  };

  handleAllGoods = () => {
    this.getGoods();
  };

  handleRedGoods = () => {
    getGoodsFromApi()
      .then(goodsList => {
        this.setState({
          goods: goodsList
            .filter((good: Goods) => (good.color === 'red'))
            .sort((a: Goods, b: Goods) => a.name.localeCompare(b.name)),
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ loading: false, hasError: true });
      });
  };

  handleFiveGoods = () => {
    getGoodsFromApi()
      .then(goodsList => {
        this.setState({
          goods: goodsList
            .sort((a: Goods, b: Goods) => a.name.localeCompare(b.name))
            .slice(0, 5),
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ loading: false, hasError: true });
      });
  };

  getGoods = () => {
    this.setState({
      loading: true,
      hasError: false,
    });

    getGoodsFromApi()
      .then(goodsList => {
        this.setState({ goods: goodsList, loading: false });
      })
      .catch(() => {
        this.setState({ loading: false, hasError: true });
      });
  };

  render() {
    const { goods, loading, hasError } = this.state;
    const buttonsInit: TypeButton[] = [
      { id: 1, title: 'Load All goods', event: this.handleAllGoods },
      { id: 2, title: 'Load 5 first goods', event: this.handleFiveGoods },
      { id: 3, title: 'Load red goods', event: this.handleRedGoods },
    ];

    if (loading) {
      return (
        <p>Loading...</p>
      );
    }

    if (hasError) {
      return (
        <>
          <p>Error with server</p>
          <button type="button" onClick={this.getGoods}>Load again</button>
        </>
      );
    }

    if (!goods.length) {
      return (
        <>
          <p>No goods</p>
          <button type="button" onClick={this.getGoods}>Load goods</button>
        </>
      );
    }

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodList goods={goods} />
        <Button buttonsInit={buttonsInit} />
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.scss';
import { getGoods } from './api/fetch';

import GoodsList from './components/GoodsList';
import Button from './components/Button';

const URL1
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';
const URL2
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';
const URL3
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

class App extends Component {
  state = {
    filteredList: [],
    error: '',
    activeLoadButton: false,
    activeLoadFiveButton: false,
    activeLoadRedButton: false,
  };

  loadGoods = () => {
    const dataPromise = getGoods(URL1);

    dataPromise.then((data) => {
      this.setState({
        filteredList: data,
        error: '',
        activeLoadButton: true,
        activeLoadFiveButton: false,
        activeLoadRedButton: false,
      });
    }).catch((error) => {
      this.setState({
        error: `Something went wrong! ${error}`,
        filteredList: [],
      });
    });
  };

  loadFirstFiveGoods = () => {
    const dataPromise = getGoods(URL2);

    dataPromise.then((data) => {
      this.setState({
        filteredList: data.sort(
          (good1, good2) => good1.name.localeCompare(good2.name)
        ).slice(0, 5),
        error: '',
        activeLoadButton: false,
        activeLoadFiveButton: true,
        activeLoadRedButton: false,
      });
    }).catch((error) => {
      this.setState({
        error: `Something went wrong! ${error}`,
        filteredList: [],
      });
    });
  };

  loadRedGoods = () => {
    const dataPromise = getGoods(URL3);

    dataPromise.then((data) => {
      this.setState({
        filteredList: data.filter(good => good.color === 'red'),
        error: '',
        activeLoadButton: false,
        activeLoadFiveButton: false,
        activeLoadRedButton: true,
      });
    }).catch((error) => {
      this.setState({
        error: `Something went wrong! ${error}`,
        filteredList: [],
      });
    });
  };

  render() {
    const {
      filteredList,
      error,
      activeLoadButton,
      activeLoadFiveButton,
      activeLoadRedButton,
    } = this.state;

    return (
      <section className="goods">
        <h1 className="main-title">Dynamic List Of Goods</h1>

        <div className="goods__buttons-container">
          <Button
            handleClick={this.loadGoods}
            active={activeLoadButton}
          >
            Load goods
          </Button>

          <Button
            handleClick={this.loadFirstFiveGoods}
            active={activeLoadFiveButton}
          >
            Load first five goods
          </Button>

          <Button
            handleClick={this.loadRedGoods}
            active={activeLoadRedButton}
          >
            Load red goods
          </Button>
        </div>

        <div className="goods__error">{error}</div>

        <GoodsList goodsList={filteredList} />
      </section>
    );
  }
}

export default App;

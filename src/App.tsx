/* eslint-disable no-console */
import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';
import { getGoods } from './api';

class App extends React.Component {
  state = {
    goods: [],
    isLoading: false,
  };

  loadFive = () => {
    this.setState({ isLoading: true });
    getGoods().then(goods => {
      this.setState({ goods: goods.data.slice(0, 5), isLoading: false });
    });
  };

  loadAll = () => {
    this.setState({ isLoading: true });
    getGoods().then(goods => {
      this.setState({ goods: goods.data, isLoading: false });
    });
  };

  loadRed = () => {
    this.setState({ isLoading: true });
    getGoods().then(goods => {
      const goodsList = goods.data.filter((good: any) => good.color === 'red');

      this.setState({
        goods: goodsList,
        isLoading: false,
      });
    });
  };

  render() {
    const { goods, isLoading } = this.state;

    return (
      <div>
        <div className="container">
          <button type="button" onClick={this.loadAll}>Load all</button>
          <button type="button" onClick={this.loadFive}>Load five</button>
          <button type="button" onClick={this.loadRed}>Load red</button>
        </div>
        <>
          {
            (isLoading)
              ? (
                <p>Loading....</p>
              )
              : (
                <GoodsList goods={goods} />
              )
          }

        </>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { getGoods } from './api/api';
import { GoodsList } from './GoodsList';

type State = {
  goods: GoodData[];
  isLoading: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoading: false,
  };

  loadAllGoods= () => {
    this.setState({ isLoading: true });
    getGoods()
      .then((goodsFromServer) => {
        this.setState({ goods: goodsFromServer, isLoading: false });
      });
  };


  showFiveGoods = () => {
    this.setState({ isLoading: true });
    getGoods()
      .then((goodsFromServer) => {
        this.setState({ goods: goodsFromServer.slice(0, 5), isLoading: false });
      });
  };

  filterRedGoods=() => {
    this.setState({ isLoading: true });
    getGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer
            .filter((good: GoodData) => good.color === 'red'),
          isLoading: false,
        });
      });
  };

  render() {
    const { goods, isLoading } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.showFiveGoods}
        >
          Load 5 first
        </button>
        <button
          type="button"
          onClick={this.filterRedGoods}
        >
          Load red goods
        </button>
        {isLoading
          ? <p>Loading...</p>
          : (<GoodsList goods={goods} />)}
      </>
    );
  }
}

export default App;

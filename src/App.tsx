import React from 'react';
import './App.css';
import GoodsList from './GoodsList';
import { getGoods } from './api';

type AppState = {
  goodList: Good[];
};

class App extends React.Component<{}, AppState> {
  state = {
    goodList: [],
  };

  loadAllGoods = () => {
    getGoods()
      .then(goodsFromServer => {
        this.setState({ goodList: goodsFromServer });
      });
  };

  loadFiveGoods = () => {
    getGoods()
      .then((goodsFromServer) => {
        this.setState({
          goodList: goodsFromServer
            .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
            .slice(0, 5),
        });
      });
  };

  loadRedGoods = () => {
    getGoods()
      .then((goodsFromServer) => {
        this.setState({
          goodList: goodsFromServer.filter((good: Good) => good.color === 'red'),
        });
      });
  };


  render() {
    const { goodList } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Click to Load all goods
        </button>
        <button
          type="button"
          onClick={this.loadFiveGoods}
        >
          Click to load first 5 goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Click to load red goods
        </button>
        <GoodsList goodList={goodList} />

      </>

    );
  }
}


export default App;

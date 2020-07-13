import React from 'react';
import './App.css';
import GoodsList from './components/GoodList';
import { getGoods } from './helpers/api';

type AppState = {
  goods: Good[];
};

type AppProps = {};

class App extends React.Component<AppProps, AppState> {
  state = {
    goods: [],
  };

  showAllGoods = () => {
    getGoods()
      .then((goodsFromServer) => {
        this.setState({ goods: goodsFromServer });
      });
  };

  setSort = () => {
    getGoods()
      .then(goodsFromServer => {
        this.setState({
          goods: [...goodsFromServer]
            .sort((a: Good, b: Good) => (a.name).localeCompare(b.name)).slice(0, 5),
        });
      });
  };

  showRedGoods = () => {
    getGoods()
      .then((goodsFromServer) => {
        this.setState({ goods: goodsFromServer.filter((good: Good) => good.color === 'red') });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
        <button
          type="button"
          onClick={this.showAllGoods}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.setSort}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.showRedGoods}
        >
          Load red goods
        </button>
      </>
    );
  }
}

export default App;

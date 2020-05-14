import React from 'react';
import './App.css';

import { GoodsList } from './Components/GoodsList/GoodsList';
import { getGoods } from './Helpers/api';

interface Good {
  id: number;
  name: string;
  color: string;
}

type AppState = {
  goods: Good[];
};

type AppProps = {};

class App extends React.Component<AppProps, AppState> {
  state={
    goods: [],
  };

  handleLoadAll = () => {
    getGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: [...goodsFromServer],
        });
      });
  };

  handleLoadFive = () => {
    getGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: [...goodsFromServer]
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 5),
        });
      });
  };

  handleLoadRed = () => {
    getGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: [...goodsFromServer].filter(good => good.color === 'red'),
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <div className="buttons__list">
          <button
            type="button"
            onClick={this.handleLoadAll}
          >
            Load All
          </button>

          <button
            type="button"
            onClick={this.handleLoadFive}
          >
            Load 5
          </button>

          <button
            type="button"
            onClick={this.handleLoadRed}
          >
            Load red
          </button>
        </div>

        <GoodsList goods={goods} />

      </>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { Good } from './interfaces';

import { GoodsList } from './GoodsList';
import getGoods from './helpers/api';


type AppState = {
  goods: Good[];
};

type AppProps = {};

export class App extends React.Component<AppProps, AppState> {
  state = {
    goods: [],
  };

  downloadGoods = () => {
    getGoods()
      .then(goodFromServer => {
        this.setState({
          goods: goodFromServer,

        });
      });
  };


  downloadRedGoods = () => {
    getGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer.filter((good: { color: string }) => good.color === 'red'),

        });
      });
  };

  downloadFiveFirstGoods = () => {
    getGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer
            .slice(0, 5)
            .sort((a: Good, b: Good) => a.name.localeCompare(b.name)),
        });
      });
  };

  render() {
    return (
      <>

        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={this.downloadGoods}>Download</button>
        <button type="button" onClick={this.downloadFiveFirstGoods}>First 5</button>
        <button type="button" onClick={this.downloadRedGoods}>Red Goods</button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

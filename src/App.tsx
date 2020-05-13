import React from 'react';
import './App.css';

import { GoodsList } from './GoodsList';
import getGoods from './helpers/api';


type AppState = {
  goods: Good[];
  isLoaded: boolean;
};

type AppProps = {};

export class App extends React.Component<AppProps, AppState> {
  state = {
    goods: [],
    isLoaded: false,
  };

  downloadGoods = () => {
    this.setState({
      isLoaded: true,
    });
    getGoods()
      .then(goodFromServer => {
        this.setState({
          goods: goodFromServer,
          isLoaded: false,
        });
      });
  };


  downloadRedGoods = () => {
    this.setState({
      isLoaded: true,
    });
    getGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer.filter((good: { color: string }) => good.color === 'red'),
          isLoaded: false,
        });
      });
  };

  downloadFiveFirstGoods = () => {
    this.setState({
      isLoaded: true,
    });
    getGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer
            .slice(0, 5)
            .sort((a: Good, b: Good) => a.name.localeCompare(b.name)),
          isLoaded: false,
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
        {(this.state.isLoaded)
          ? <div>Loading....</div>
          : <GoodsList goods={this.state.goods} />}
      </>
    );
  }
}

export default App;

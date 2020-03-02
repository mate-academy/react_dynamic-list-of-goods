import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { getGoods } from './api/api';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Button } from './components/Button/Button';

interface AppState {
  goods: Good[];
}

export class App extends React.Component<{}, AppState> {
  state = {
    goods: [],
  };

  downloadAllGoods = () => {
    getGoods().then(goods => {
      this.setState({ goods });
    });
  };

  downloadFiveGoods = () => {
    getGoods().then(goods => {
      this.setState({
        goods: goods
          .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
          .slice(0, 5),
      });
    });
  };

  downloadRedGoods = () => {
    getGoods().then(goods => {
      this.setState({
        goods: goods.filter((good: Good) => good.color === 'red'),
      });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="title">Dynamic list of Goods</h1>
        <Button onClick={this.downloadAllGoods}>
          All goods
        </Button>
        <Button onClick={this.downloadFiveGoods}>
          Five goods
        </Button>
        <Button onClick={this.downloadRedGoods}>
          Red goods
        </Button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

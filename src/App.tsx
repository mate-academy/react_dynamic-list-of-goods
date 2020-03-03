import React from 'react';
import './App.css';
import { GoodsList } from './component/GoodsList/GoodsList';
import { getGoodssFromServer } from './api/goodsListFromServer';

interface AppTypes {
  goodsFromServer: Good[];
}

export class App extends React.Component<{}, AppTypes> {
  state = {
    goodsFromServer: [],
  };

  loadAll = () => {
    getGoodssFromServer()
      .then(good => {
        this.setState({ goodsFromServer: good });
      });
  };

  loadRed = () => {
    getGoodssFromServer()
      .then(good => {
        this.setState({ goodsFromServer: good.filter(item => item.color === 'red') });
      });
  };

  loadFirstFive = () => {
    getGoodssFromServer()
      .then(good => {
        this.setState({
          goodsFromServer: good.slice(0, 5)
            .sort((a, b) => a.name.localeCompare(b.name)),
        });
      });
  };

  render() {
    const { goodsFromServer } = this.state;

    return (
      <div>
        <h1>GoodList</h1>
        <button type="button" onClick={this.loadAll}>Load all</button>
        <button type="button" onClick={this.loadRed}>Load red</button>
        <button type="button" onClick={this.loadFirstFive}>Load first 5</button>
        <GoodsList goodsFromServer={goodsFromServer} />
      </div>
    );
  }
}

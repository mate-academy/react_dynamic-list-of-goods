import React, { Component } from 'react';
import './App.css';
import { GoodsList, Good } from './GoodsList/GoodsList';
import getGoods from './api/api';

interface State {
  listOfGoods: Array<Good>;
  filesIsLoaded: boolean;
}

class App extends Component {
  state: State = {
    listOfGoods: [],
    filesIsLoaded: false,
  };

  handleShowAllGoods = () => {
    this.setState({
      filesIsLoaded: true,
    });
    getGoods()
      .then(goods => {
        this.setState({
          listOfGoods: goods,
          filesIsLoaded: false,
        });
      });
  };

  handleShowFiveFirstGoods = () => {
    this.setState({
      filesIsLoaded: true,
    });
    getGoods()
      .then(goods => {
        this.setState({
          listOfGoods: goods.sort((a: Good, b: Good) => (a.name.localeCompare(b.name))).slice(0, 5),
          filesIsLoaded: false,
        });
      });
  };

  handleShowAllRedGoods = () => {
    this.setState({
      filesIsLoaded: true,
    });
    getGoods()
      .then(goods => {
        this.setState({
          listOfGoods: goods.filter((good: Good) => (good.color === 'red')),
          filesIsLoaded: false,
        });
      });
  };


  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button type="button" onClick={this.handleShowAllGoods}>Load All goods</button>

        <button type="button" onClick={this.handleShowFiveFirstGoods}>Load five first goods</button>

        <button type="button" onClick={this.handleShowAllRedGoods}>Load red goods</button>

        {(this.state.filesIsLoaded)
          ? 'Loading from server'
          : <GoodsList goodsList={this.state.listOfGoods} />}
      </>
    );
  }
}

export default App;

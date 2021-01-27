import React from 'react';
import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = (showOption) => {
    showOption()
      .then((goods) => {
        this.setState({
          goods: [...goods],
        });
      });
  }

  showAll = () => {
    this.getGoods(getAll);
  }

  showFive = () => {
    this.getGoods(get5First);
  }

  showRed = () => {
    this.getGoods(getRed);
  }

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          className="btn"
          onClick={this.showAll}
          type="button"
        >
          Show All Goods
        </button>
        <button
          className="btn"
          onClick={this.showFive}
          type="button"
        >
          Show First Five
        </button>
        <button
          className="btn"
          onClick={this.showRed}
          type="button"
        >
          Show Red Goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}
export default App;

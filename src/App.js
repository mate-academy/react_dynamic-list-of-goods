import React from 'react';
import './App.css';
import GoodsList from './GoodsList';
import getDataFromUrl from './goodsApi';
import { URL, FILTER_TYPES } from './const';

class App extends React.Component {
  state = {
    goods: [],
    start: false,
  };

  start = () => {
    this.loadAllGoods();
    this.setState({
      start: true,
    });
  };

  loadAllGoods = () => {
    getDataFromUrl(URL).then(data => this.setState({
      goods: data,
    }));
  };

  loadFirstFiveGoods = () => {
    getDataFromUrl(URL).then(data => this.setState({
      goods: data.slice(0, 5).sort(
        (a, b) => a.name.localeCompare(b.name)
      ),
    }));
  };

  loadRedGoods = () => {
    getDataFromUrl(URL).then(data => this.setState({
      goods: data.filter(good => good.color === 'red'),
    }));
  };

  loadFiltered = (filterType) => {
    switch (filterType) {
      case FILTER_TYPES.all:
      default:
        this.loadAllGoods();
        break;

      case FILTER_TYPES.first5:
        this.loadFirstFiveGoods();
        break;

      case FILTER_TYPES.red:
        this.loadRedGoods();
        break;
    }
  };

  render() {
    const { start, goods } = this.state;

    return (
      <div className="App">
        {!start && (
          <button
            type="button"
            onClick={this.start}
          >
            Show Goods List
          </button>
        )}
        {start && (
          <GoodsList
            goods={goods}
            loadFiltered={this.loadFiltered}
          />
        )}
      </div>
    );
  }
}

export default App;

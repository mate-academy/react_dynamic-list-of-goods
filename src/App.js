import React from 'react';
import './App.css';
import GoodsList from './GoodsList';
import getDataFromUrl from './goodsApi';
import { URL, FILTER_TYPES } from './const';

class App extends React.Component {
  state = {
    goods: [],
    start: false,
    currentFilter: FILTER_TYPES.all,
  };

  componentDidMount() {
    this.setGoods();
  }

  start = () => {
    this.setState({
      start: true,
    });
  };

  setGoods = () => {
    getDataFromUrl(URL).then(data => this.setState({
      goods: data,
    }));
  };

  setFilter = (filterType) => {
    this.setState({
      currentFilter: filterType,
    });
  };

  getFiltered = (filterType) => {
    const { goods } = this.state;

    switch (filterType) {
      case FILTER_TYPES.all:
      default:
        return goods;

      case FILTER_TYPES.first5:
        return goods.slice(0, 5).sort(
          (a, b) => a.name.localeCompare(b.name)
        );

      case FILTER_TYPES.red:
        return goods.filter(good => good.color === 'red');
    }
  };

  render() {
    const { start, currentFilter } = this.state;

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
            goods={this.getFiltered(currentFilter)}
            setFilter={this.setFilter}
          />
        )}
      </div>
    );
  }
}

export default App;

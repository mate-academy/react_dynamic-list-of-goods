import React from 'react';
import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { GoodList } from './Components/GoodList';

class App extends React.Component {
  state = {
    show: 'all',
    currentListGoods: getAll(),
  }

  getFirstFiveGoods = () => {
    this.setState((state) => {
      if (state.show !== 'firstFive') {
        return {
          show: 'firstFive',
          currentListGoods: get5First(),
        };
      }

      return true;
    });
  };

  getRedGoods = () => {
    this.setState((state) => {
      if (state.show !== 'onlyRed') {
        return {
          show: 'onlyRed',
          currentListGoods: getRed(),
        };
      }

      return true;
    });
  };

  getAllGoods = () => {
    this.setState((state) => {
      if (state.show !== 'all') {
        return {
          show: 'all',
          currentListGoods: getAll(),
        };
      }

      return true;
    });
  };

  render() {
    const { currentListGoods, show } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            onClick={this.getAllGoods}
          >
            All goods
          </button>
          <button
            type="button"
            onClick={this.getRedGoods}
          >
            Only red goods
          </button>
          <button
            type="button"
            onClick={this.getFirstFiveGoods}
          >
            First 5 goods
          </button>
        </div>
        <GoodList goods={currentListGoods} show={show} />
      </>
    );
  }
}

export default App;

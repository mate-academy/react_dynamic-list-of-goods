import React from 'react';
import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { GoodList } from './Components/GoodList';

class App extends React.Component {
  state = {
    show: '',
    currentListGoods: [],
  }

  componentDidMount() {
    this.recordListFromServer(getAll);
  }

  recordListFromServer = (promiseList, show = 'all') => {
    promiseList()
      .then((res) => {
        this.setState((state) => {
          if (state.show !== show) {
            return {
              currentListGoods: [...res],
              show,
            };
          }

          return true;
        });
      });
  };

  getFirstFiveGoods = () => {
    this.recordListFromServer(get5First, 'firstFive');
  };

  getRedGoods = () => {
    this.recordListFromServer(getRed, 'onlyRed');
  };

  getAllGoods = () => {
    this.recordListFromServer(getAll);
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

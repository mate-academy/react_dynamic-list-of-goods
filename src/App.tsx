import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

enum SortType {
  default = '',
  all = 'all',
  five = 'five',
  red = 'red',
}

interface State {
  goods: Good[];
  sortBy: SortType;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    sortBy: SortType.default,
  };

  showAll = () => {
    getAll()
      .then(goods => {
        this.setState({
          goods,
          sortBy: SortType.all,
        });
      });
  };

  showFive = () => {
    get5First()
      .then(goods => {
        this.setState({
          goods,
          sortBy: SortType.five,
        });
      });
  };

  showRed = () => {
    getRedGoods()
      .then(goods => {
        this.setState({
          goods,
          sortBy: SortType.red,
        });
      });
  };

  render() {
    const { goods, sortBy } = this.state;

    return (
      <>
        <h1 className="text-center py-2">Dynamic list of Goods</h1>
        { goods.length > 0 && (
          <GoodsList
            goods={goods}
          />
        )}
        <div className="d-flex justify-content-center align-items-center">
          <button
            className={classNames('border bg-primary rounded text-light py-2 m-2', { 'bg-success': sortBy === SortType.all })}
            type="submit"
            onClick={this.showAll}
          >
            Load All goods
          </button>

          <button
            className={classNames('border bg-primary rounded text-light py-2 m-2', { 'bg-success': sortBy === SortType.five })}
            type="submit"
            onClick={this.showFive}
          >
            Load 5 first goods
          </button>

          <button
            className={classNames('border bg-primary rounded text-light py-2 m-2', { 'bg-success': sortBy === SortType.red })}
            type="submit"
            onClick={this.showRed}
          >
            Load red goods
          </button>
        </div>
      </>
    );
  }
}

export default App;

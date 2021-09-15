import React from 'react';
import './App.scss';
import classNames from 'classnames';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './GoodsList';

interface State {
  goods: Good[] | null;
  sortBy: string;
}

export class App extends React.Component<{}, State> {
  state = {
    goods: null,
    sortBy: 'all',
  };

  showAll = () => {
    getAll()
      .then(items => {
        this.setState({
          goods: items,
          sortBy: 'all',
        });
      });
  };

  showFirst5 = () => {
    get5First()
      .then(items => {
        this.setState({
          goods: items,
          sortBy: 'first5',
        });
      });
  };

  showOnlyRed = () => {
    getRedGoods()
      .then(items => {
        this.setState({
          goods: items,
          sortBy: 'onlyRed',
        });
      });
  };

  render() {
    const { goods, sortBy } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className={classNames(
            'button',
            { active: sortBy === 'all' },
          )}
          onClick={this.showAll}
        >
          Load All goods
        </button>

        <button
          type="button"
          className={classNames(
            'button',
            { active: sortBy === 'first5' },
          )}
          onClick={this.showFirst5}
        >
          Load first 5 goods
        </button>

        <button
          type="button"
          className={classNames(
            'button',
            { active: sortBy === 'onlyRed' },
          )}
          onClick={this.showOnlyRed}
        >
          Load only red goods
        </button>

        {this.state.goods && (<GoodList goods={goods} />)}
      </div>
    );
  }
}

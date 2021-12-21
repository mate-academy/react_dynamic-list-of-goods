import React from 'react';
import './App.scss';
import 'bulma';
import classNames from 'classnames';

import { getAllGoods, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { LoadingError } from './components/LoadingError';

interface State {
  goods: Good[];
  isLoading: boolean;
  hasLoadingError: boolean;
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoading: false,
    hasLoadingError: false,
  };

  loadData = async (getGoods: () => Promise<Good[]>) => {
    this.setState({
      isLoading: true,
      hasLoadingError: false,
    });

    try {
      const goods = await getGoods();

      this.setState({
        goods,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        hasLoadingError: true,
      });
    }
  };

  render() {
    const {
      goods,
      isLoading,
      hasLoadingError,
    } = this.state;

    return (
      <div className="content pl-5 pt-5">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          className={classNames('button', 'is-info', {
            'is-loading': isLoading,
          })}
          onClick={() => this.loadData(getAllGoods)}
        >
          Load all goods
        </button>

        <button
          type="button"
          className={classNames('button', 'is-primary', {
            'is-loading': isLoading,
          })}
          onClick={() => this.loadData(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className={classNames('button', 'is-danger', {
            'is-loading': isLoading,
          })}
          onClick={() => this.loadData(getRedGoods)}
        >
          Load red goods
        </button>

        {!isLoading && !hasLoadingError && (
          <GoodsList goods={goods} />
        )}

        {hasLoadingError && (
          <LoadingError />
        )}
      </div>
    );
  }
}

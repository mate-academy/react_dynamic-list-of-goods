import React from 'react';
import './App.scss';
import 'bulma';
import classNames from 'classnames';

import { getData } from './api/goods';
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

  loadAllGoods = async () => {
    this.setState({
      isLoading: true,
      hasLoadingError: false,
    });

    try {
      const goods = await getData();

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

  load5FirstGoods = async () => {
    this.setState({
      isLoading: true,
      hasLoadingError: false,
    });

    try {
      let allGoods: Good[] = await getData();

      allGoods = allGoods
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 5);

      this.setState({
        goods: allGoods,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        hasLoadingError: true,
      });
    }
  };

  loadRedGoods = async () => {
    this.setState({
      isLoading: true,
      hasLoadingError: false,
    });

    try {
      const allGoods: Good[] = await getData();

      this.setState({
        goods: allGoods.filter(
          good => good.color === 'red',
        ),
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
          onClick={this.loadAllGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          className={classNames('button', 'is-primary', {
            'is-loading': isLoading,
          })}
          onClick={this.load5FirstGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className={classNames('button', 'is-danger', {
            'is-loading': isLoading,
          })}
          onClick={this.loadRedGoods}
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

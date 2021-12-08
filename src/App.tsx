import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[],
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>Dynamic list of Goods</h1>
          <div className="Buttons">
            <button
              type="button"
              onClick={() => getAll()
                .then(goods => (
                  this.setState({ goods })
                ))}
            >
              Load All Goods
            </button>
            <button
              type="button"
              onClick={() => get5First()
                .then(goods => (
                  this.setState({ goods })
                ))}
            >
              Load 5 First Goods
            </button>
            <button
              type="button"
              onClick={() => getRedGoods()
                .then(goods => (
                  this.setState({ goods })
                ))}
            >
              Load Red Goods
            </button>
          </div>
          <div
            className="Goods__List"
          >
            <GoodsList goods={this.state.goods} />
          </div>
          <button
            type="button"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      </>
    );
  }
}

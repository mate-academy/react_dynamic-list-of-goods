import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './goodsList';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  componentDidMount() {
    getAll()
      .then(goodsFromServer => {
        this.setState({ goods: goodsFromServer });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div
        className="container"
      >
        <div
          className="buttons"
        >
          <button
            className="button is-info is-rounded"
            type="button"
            onClick={() => (
              getAll()
                .then(allGoods => {
                  this.setState({ goods: allGoods });
                })
            )}
          >
            Load All goods
          </button>

          <button
            className="button is-info is-rounded"
            type="button"
            onClick={() => (
              getRedGoods()
                .then(filteredGoods => {
                  this.setState({ goods: filteredGoods });
                })
            )}
          >
            Load 5 first goods
          </button>

          <button
            className="button is-info is-rounded"
            type="button"
            onClick={() => (
              get5First()
                .then(filteredGoods => {
                  this.setState({ goods: filteredGoods });
                })
            )}
          >
            Load red goods
          </button>
        </div>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

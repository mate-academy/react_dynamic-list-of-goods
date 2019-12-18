import React from 'react';
import './App.scss';
import goodsPromise from './goodsPromise';
import GoodsList from './components/GoodsList';

const FILTER_TYPES = {
  all: 'all',
  fiveFirst: 'fiveFirst',
  red: 'red',
};

class App extends React.Component {
  state = {
    goods: [],
    show: null,
  }

  loadAllGoods = () => {
    goodsPromise
      .then((goods) => {
        this.setState({
          goods,
          show: FILTER_TYPES.all,
        });
      });
  }

  loadFiveFirstGoods = () => {
    goodsPromise
      .then((goods) => {
        this.setState({
          goods: goods.filter(good => good.id <= 5),
          show: FILTER_TYPES.fiveFirst,
        });
      });
  }

  loadRedGoods = () => {
    goodsPromise
      .then((goods) => {
        this.setState({
          goods: goods.filter(good => good.color === 'red'),
          show: FILTER_TYPES.red,
        });
      });
  }

  render() {
    const { goods, show } = this.state;

    return (
      <div className="App">
        <section>
          {show === FILTER_TYPES.all ? (
            <GoodsList
              goods={goods}
            />
          ) : (
            <button
              className="button"
              type="button"
              onClick={this.loadAllGoods}
            >
              Load goods
            </button>
          )}
        </section>

        <section>
          {show === FILTER_TYPES.fiveFirst ? (
            <GoodsList
              goods={goods}
            />
          ) : (
            <button
              className="button"
              type="button"
              onClick={this.loadFiveFirstGoods}
            >
              Load 5 first goods
            </button>
          )}
        </section>

        <section>
          {show === FILTER_TYPES.red ? (
            <GoodsList
              goods={goods}
            />
          ) : (
            <button
              className="button"
              type="button"
              onClick={this.loadRedGoods}
            >
              Load red goods
            </button>
          )}
        </section>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import classNames from 'classnames';

import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './components/GoodsList';

type State = {
  goods: Good[];
  btnInLoading: number,
};

type GetGoodsCallback = () => Promise<Good[]>;

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    btnInLoading: 0,
  };

  handleShowGoods = async (getGoods: GetGoodsCallback, btnId: number) => {
    this.setState({ btnInLoading: btnId });

    const goods = await getGoods();

    this.setState({
      goods,
      btnInLoading: 0,
    });
  };

  render() {
    const { goods, btnInLoading } = this.state;

    return (
      <section className="section">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-loading': btnInLoading === 1 },
            )}
            onClick={() => this.handleShowGoods(getAll, 1)}
          >
            Load All goods
          </button>
          <button
            type="button"
            className={classNames(
              'button',
              'is-link',
              { 'is-loading': btnInLoading === 2 },
            )}
            onClick={() => this.handleShowGoods(get5First, 2)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className={classNames(
              'button',
              'is-danger',
              { 'is-loading': btnInLoading === 3 },
            )}
            onClick={() => this.handleShowGoods(getRedGoods, 3)}
          >
            Load red goods
          </button>
        </div>

        {!!goods.length && <GoodsList goods={goods} />}
      </section>
    );
  }
}

export default App;

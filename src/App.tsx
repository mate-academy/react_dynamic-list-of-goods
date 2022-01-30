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

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    btnInLoading: 0,
  };

  handleShowAllGoods = async () => {
    this.setState({ btnInLoading: 1 });

    const goods = await getAll();

    this.setState({
      goods,
      btnInLoading: 0,
    });
  };

  handleShow5Goods = async () => {
    this.setState({ btnInLoading: 2 });

    const goods = await get5First();

    this.setState({
      goods,
      btnInLoading: 0,
    });
  };

  handleShowRedGoods = async () => {
    this.setState({ btnInLoading: 3 });

    const goods = await getRedGoods();

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
            onClick={this.handleShowAllGoods}
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
            onClick={this.handleShow5Goods}
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
            onClick={this.handleShowRedGoods}
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

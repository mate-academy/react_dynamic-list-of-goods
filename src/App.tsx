import React from 'react';
import classNames from 'classnames';
import 'bulma';
import './App.scss';

import { getAllGoods, getFiveFirst, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

type State = {
  goods: Good[];
  loadingAll: boolean;
  loadingFive: boolean;
  loadingRed: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    loadingAll: false,
    loadingFive: false,
    loadingRed: false,
  };


  loadGoods = async (event: React.MouseEvent<HTMLButtonElement>, callback: Callback) => {
    const { name } = event.currentTarget;

    this.setState({ [name]: true } as unknown as { [K in keyof State]: State[K] });

    const goods = await callback();

    this.setState({
      goods: [...goods],
      [name]: false
    } as unknown as { [K in keyof State]: State[K]
      })
  }

  render() {
    const {
      goods,
      loadingAll,
      loadingFive,
      loadingRed,
    } = this.state;

    return (
      <div className="App">
        <section className="goods-block App__goods-block">
          <div className="goods-block__button-container">
            <button
              name="loadingAll"
              type="button"
              className={
                classNames('button is-info is-outlined',
                  { 'is-loading': loadingAll })
              }
              onClick={(event) => {
                this.loadGoods(event, getAllGoods)
              }}
            >
              Load all goods
            </button>
            <button
              name="loadingFive"
              type="button"
              className={
                classNames('button is-info is-outlined',
                  { 'is-loading': loadingFive })
              }
              onClick={(event) => {
                this.loadGoods(event, getFiveFirst)
              }}
            >
              Load 5 first goods
            </button>
            <button
              name="loadingRed"
              type="button"
              className={
                classNames('button is-info is-outlined',
                  { 'is-loading': loadingRed })
              }
              onClick={(event) => {
                this.loadGoods(event, getRedGoods)
              }}
            >
              Load red goods
            </button>
          </div>
          {goods.length > 0
            && !loadingAll
            && !loadingFive
            && !loadingRed
            && <GoodsList goods={goods} />}
        </section>
      </div>
    );
  }
}

export default App;

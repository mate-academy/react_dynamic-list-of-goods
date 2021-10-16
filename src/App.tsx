import React from 'react';

import { GoodsList } from './components/GoodsList';

import * as goodsAPI from './api/goods';

interface State {
  goods: Good[] | null;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: null,
  };

  getGoods = async (goodsType: () => Promise<Good[]>) => {
    const goods = await goodsType();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;
    const {
      getAll,
      get5First,
      getRedGoods,
    } = goodsAPI;

    return (
      <section className="section">
        <div style={{ textAlign: 'center' }} className="container">
          <div className="box">

            <h1 className="title">Goods</h1>

            <button
              className="button is-primary mr-3"
              type="button"
              onClick={() => this.getGoods(getAll)}
            >
              Load all goods
            </button>

            <button
              className="button is-primary mr-3"
              type="button"
              onClick={() => this.getGoods(get5First)}
            >
              Load 5 first goods
            </button>

            <button
              className="button is-primary mr-3"
              type="button"
              onClick={() => this.getGoods(getRedGoods)}
            >
              Load red goods
            </button>
          </div>

          {goods && (
            <GoodsList goods={goods} />
          )}
        </div>
      </section>
    );
  }
}

export default App;

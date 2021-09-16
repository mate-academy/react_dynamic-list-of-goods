import React from 'react';
import * as goodsAPI from './api/goods';
import { GoodsList } from './components/GoodsList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

interface State {
  goods: Good[];
  anError: boolean;
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    anError: false,
  };

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    try {
      const goods = await getGoods();

      this.setState({
        goods,
      });
    } catch (error) {
      this.setState({
        anError: true,
      });
    }
  };

  render() {
    const { goods, anError } = this.state;

    return (
      <div className="container">
        <div className="App">
          <div className="row align-items-center justify-content-center">
            <div className="col-6">
              <div className="d-flex justify-content-center">
                <h1 className="App__title">Dynamic list of Goods</h1>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-6">
              <div className="App__goods d-flex justify-content-center">
                {!anError
                  ? <GoodsList goods={goods} />
                  : <div>Loading Error</div>}
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6">
              <div className="App__buttons d-flex justify-content-center">
                <button
                  className="App__button btn btn-primary"
                  type="button"
                  onClick={() => this.loadGoods(goodsAPI.getAll)}
                >
                  Load all goods
                </button>

                <button
                  className="App__button btn btn-primary"
                  type="button"
                  onClick={() => this.loadGoods(goodsAPI.get5First)}
                >
                  Load 5 first goods
                </button>

                <button
                  className="App__button btn btn-danger"
                  type="button"
                  onClick={() => this.loadGoods(goodsAPI.getRedGoods)}
                >
                  Load red goods
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

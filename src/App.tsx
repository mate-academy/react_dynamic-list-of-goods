import React from 'react';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

interface State {
  goods: Good[] | [];
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  getGoods = (sortBy: Promise<Good[]>) => {
    (async () => {
      const goods = await sortBy;

      this.setState({ goods });
    })();
  };

  render() {
    return (
      <main>
        <h1>Dynamic list of Goods</h1>
        <section className="container-fluid">
          <div>
            <div className="col">
              <div className="col-sm p-1">
                <button
                  type="button"
                  onClick={() => this.getGoods(get5First())}
                  className="btn btn-primary"
                >
                  Only first 5
                </button>
              </div>
              <div className="col-sm p-1">
                <button
                  type="button"
                  onClick={() => this.getGoods(getRedGoods())}
                  className="btn btn-primary"
                >
                  Only Red
                </button>
              </div>
              <div className="col-sm p-1">
                <button
                  type="button"
                  onClick={() => this.getGoods(getAll())}
                  className="btn btn-primary"
                >
                  All
                </button>
              </div>
            </div>
            <GoodsList goods={this.state.goods} />
          </div>
        </section>
      </main>
    );
  }
}

export default App;

import React from 'react';
import 'bulma';
import './App.scss';
import { GoodsList } from './Components/GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  LoadHandler = async (getFunction: Promise<Good[]>) => {
    const goods = await getFunction;

    // eslint-disable-next-line no-console
    console.log(goods);

    this.setState({
      goods: [...goods],
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <section
        className="is-half "
      >
        <div className="container">
          <button
            type="button"
            className="button is-link"
            onClick={() => this.LoadHandler(getAll())}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="button is-link"
            onClick={() => this.LoadHandler(get5First())}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button is-link"
            onClick={() => this.LoadHandler(getRedGoods())}
          >
            Load red goods
          </button>
          <div className="columns">
            <div className="column">
              {goods.length > 0 && (<GoodsList goods={goods} />)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;

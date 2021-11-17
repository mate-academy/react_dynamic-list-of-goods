import React from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type Props = {};
type State = {
  goods: Good[] | [];
};

class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (event.currentTarget.name === 'allGoods') {
      getAll()
        .then((goods: Good[]) => {
          this.setState({ goods });
        });
    }

    if (event.currentTarget.name === 'firstFive') {
      get5First()
        .then((goods: Good[]) => {
          this.setState({ goods });
        });
    }

    if (event.currentTarget.name === 'redGoods') {
      getRedGoods()
        .then((goods: Good[]) => {
          this.setState({ goods });
        });
    }
  };

  render() {
    const { goods } = this.state;

    return (
      <main
        className="main container"
      >
        <h1 className="main__title">
          Dynamic list of Goods
        </h1>
        <div className="main__buttons">
          <button
            className="button is-success"
            name="allGoods"
            type="button"
            onClick={this.handleClick}
          >
            Load All goods
          </button>
          <button
            className="button is-warning"
            type="button"
            name="firstFive"
            onClick={this.handleClick}
          >
            Load 5 first goods
          </button>
          <button
            className="button is-danger"
            type="button"
            name="redGoods"
            onClick={this.handleClick}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </main>
    );
  }
}

export default App;

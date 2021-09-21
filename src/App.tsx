import React from 'react';
import './App.scss';
import { GoodsButton } from './components/GoodsButton';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[] | null;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: null,
  };

  getGoods = (goods: Good[]) => {
    this.setState({
      goods,
    });
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { id } = event.currentTarget;

    switch (id) {
      case 'allGoods':
        getAll()
          .then(this.getGoods);
        break;
      case 'firstFiveGoods':
        get5First()
          .then(this.getGoods);
        break;
      case 'redGoods':
        getRedGoods()
          .then(this.getGoods);
        break;
      default:
        break;
    }
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App container col-6">
        <h1>Dynamic list of Goods</h1>

        <div className="d-flex justify-content-between">
          <GoodsButton
            getGoods={this.handleClick}
            thisId="allGoods"
            buttonTitle="All goods"
          />

          <GoodsButton
            getGoods={this.handleClick}
            thisId="firstFiveGoods"
            buttonTitle="First Five goods"
          />

          <GoodsButton
            getGoods={this.handleClick}
            thisId="redGoods"
            buttonTitle="Red goods"
          />
        </div>

        {goods && (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;

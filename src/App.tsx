import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  showAll = async () => {
    const allGoods = await getAll();

    this.setState({
      goods: allGoods,
    });
  };

  showFirstFiveGoods = async () => {
    const firstFiveGoods = await get5First();

    this.setState({
      goods: firstFiveGoods,
    });
  };

  showRedGoods = async () => {
    const redGoods = await getRedGoods();

    this.setState({
      goods: redGoods,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
        <div>
          <button
            className="App__button showAll"
            type="button"
            onClick={this.showAll}
          >
            Show all
          </button>
          <button
            className="App__button showFive"
            type="button"
            onClick={this.showFirstFiveGoods}
          >
            show first 5
          </button>
          <button
            className="App__button showRed"
            type="button"
            onClick={this.showRedGoods}
          >
            show Red
          </button>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  showAllGoods = async () => {
    const goods = await getAll();

    this.setState({
      goods: [...goods],
    });
  };

  show5FirstGoods = async () => {
    const first5Goods = await get5First();

    this.setState({
      goods: [...first5Goods],
    });
  };

  showRedGoods = async () => {
    const redGoods = await getRedGoods();

    this.setState({
      goods: [...redGoods],
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <body className="body m-4">
        <div className="buttons">
          <button
            type="button"
            className="button"
            onClick={this.showAllGoods}
          >
            Load all goods
          </button>
          <button
            type="button"
            className="button"
            onClick={this.show5FirstGoods}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button"
            onClick={this.showRedGoods}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </body>
    );
  }
}

export default App;

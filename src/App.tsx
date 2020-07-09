import React from 'react';
import './App.css';

import { GoodsList } from './Components/GoodsList/GoodsList';
import { getGoods, Good } from './Helpers/api';

type AppState = {
  goods: Good[];
  loadingError: string;
};

type AppProps = {};

class App extends React.Component<AppProps, AppState> {
  state = {
    goods: [],
    loadingError: '',
  };

  async handleLoadAll() {
    try {
      const goodsFromServer = await getGoods();

      this.setState({ goods: goodsFromServer });
    } catch (error) {
      this.setState({ loadingError: error.message }); 
    }
  };

  async handleLoadFive() {
    const goodsFromServer = await getGoods();

    this.setState({
      goods: [...goodsFromServer]
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 5),
    });
  };

  async handleLoadRed() {
    const goodsFromServer = await getGoods();

    this.setState({
      goods: [...goodsFromServer]
        .filter(good => good.color === 'red'),
    });
  };

  render() {
    const { goods, loadingError } = this.state;

    return (
      <>
        <div className="buttons__list">
          <button
            type="button"
            onClick={() => this.handleLoadAll()}
          >
            Load All
          </button>

          <button
            type="button"
            onClick={() => this.handleLoadFive()}
          >
            Load 5
          </button>

          <button
            type="button"
            onClick={() => this.handleLoadRed()}
          >
            Load red
          </button>
        </div>
        {loadingError ? (
          <p>{loadingError}</p>
        ) : (
            <GoodsList goods={goods} />
          )}
      </>
    );
  }
}

export default App;

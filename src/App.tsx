import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './react-app-env';
import { GoodList } from './components/GoodList';

interface State {
  isStarted: boolean,
  goods: Good[] | [],
}

class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    goods: [],
  };

  updateState = (callback: () => Promise<Good[] | []>) => {
    callback().then((goods: Good[]) => {
      this.setState({
        isStarted: true,
        goods,
      });
    });
  };

  getAllGoods = () => {
    return this.updateState(getAll);
  };

  get5FirstGoods = () => {
    return this.updateState(get5First);
  };

  getRedColorGoods = () => {
    return this.updateState(getRedGoods);
  };

  render() {
    const { isStarted, goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="buttons app__buttons">
          <button
            type="button"
            onClick={this.getAllGoods}
            className="button buttons__button"
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={this.get5FirstGoods}
            className="button buttons__button"
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={this.getRedColorGoods}
            className="button buttons__button"
          >
            Load red goods
          </button>
        </div>
        {isStarted && (
          <GoodList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;

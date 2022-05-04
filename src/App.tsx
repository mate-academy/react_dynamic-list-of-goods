import React from 'react';
import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './react-app-env';
import GoodList from './components/GoodList/GoodList';

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
    return this.updateState(getRed);
  };

  render() {
    const { isStarted, goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            className="btn"
            onClick={this.getAllGoods}
          >
            Load All goods
          </button>

          <button
            type="button"
            className="btn"
            onClick={this.get5FirstGoods}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="btn"
            onClick={this.getRedColorGoods}
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

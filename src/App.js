import React from 'react';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  preparedGoods = (func) => {
    func().then((goods) => {
      this.setState({
        goods,
      });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1>Dynamic list of Goods</h1>

        <button
          className="ui inverted green large button"
          type="button"
          onClick={() => (
            this.preparedGoods(getAll)
          )}
        >
          Get All
        </button>

        <button
          className="ui inverted orange large button"
          type="button"
          onClick={() => (
            this.preparedGoods(get5First)
          )}
        >
          Get five
        </button>

        <button
          className="ui inverted red large button"
          type="button"
          onClick={() => (
            this.preparedGoods(getRedGoods)
          )}
        >
          Get red
        </button>

        <div className="app_list">
          <GoodsList goods={goods} />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList';
import { Button } from './components/Button';

const callbacks = [
  {
    callback: getAll,
    text: 'Load All goods',
  },
  {
    callback: get5First,
    text: 'Load 5 first goods',
  },
  {
    callback: getRedGoods,
    text: 'Load red goods',
  },
];

class App extends React.PureComponent {
  state = {
    goods: null,
  }

  getGoods = (callback) => {
    callback()
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        {callbacks.map(({ callback, text }) => (
          <Button
            text={text}
            onClick={this.getGoods}
            callback={callback}
          />
        ))}
        {goods && (
          <GoodList
            goods={goods}
          />
        )}
      </div>
    );
  }
}

export default App;

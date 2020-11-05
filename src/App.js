import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList';
import { Button } from './components/Button';

const buttons = [
  {
    callback: getAll,
    text: 'Load All goods',
    id: 1,
  },
  {
    callback: get5First,
    text: 'Load 5 first goods',
    id: 2,
  },
  {
    callback: getRedGoods,
    text: 'Load red goods',
    id: 3,
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
        {buttons.map(({ callback, text, id }) => (
          <Button
            text={text}
            onClick={this.getGoods}
            callback={() => this.getGoods(callback)}
            key={id}
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

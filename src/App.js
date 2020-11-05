import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { Button } from './Button';
import { GoodsList } from './GoodsList';

const buttons = {
  'Load All goods': getAll(),
  'Load 5 first goods': get5First(),
  'Load red goods': getRed(),
};

class App extends React.Component {
  state = {
    goods: [],
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <div className="app__container">
          {Object.entries(buttons).map(([name, loader]) => (
            <Button
              key={name}
              name={name}
              handleClick={() => loader.then((goodsFromServer) => {
                this.setState({ goods: goodsFromServer });
              })}
            />
          ))}
        </div>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

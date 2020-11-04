import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  setGoods = (fuctionType) => {
    fuctionType().then((goods) => {
      this.setState({
        goods,
      });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="app__buttons">
          <Button
            text="Load all goods"
            handleClick={() => (
              this.setGoods(getAll)
            )}
          />

          <Button
            text="Load 5 first goods"
            handleClick={() => (
              this.setGoods(get5First)
            )}
          />

          <Button
            text="Load red goods"
            handleClick={() => (
              this.setGoods(getRedGoods)
            )}
          />
        </div>

        <div className="content">
          <GoodsList goods={goods} />
        </div>
      </div>
    );
  }
}

export default App;

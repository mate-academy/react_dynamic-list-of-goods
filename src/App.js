import React from 'react';
import { GoodsList } from './GoodsList/GoodsList';
import { Button } from './Button/Button';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  getGoods = (callback) => {
    callback()
      .then(response => this.setState({
        goods: response,
      }));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <div>
          <Button
            name="Load All goods"
            callback={getAll}
            onClick={this.getGoods}
          />
          <Button
            name="Load 5 first goods"
            callback={get5First}
            onClick={this.getGoods}
          />
          <Button
            name="Load red goods"
            callback={getRedGoods}
            onClick={this.getGoods}
          />
        </div>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;

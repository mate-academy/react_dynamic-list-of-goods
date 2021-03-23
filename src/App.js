import React from 'react';
import { GoodsList } from './GoodsList/GoodsList';
import { Button } from './Button/Button';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadGoods = (callback) => {
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
            onLoad={() => this.loadGoods(getAll)}
          />
          <Button
            name="Load 5 first goods"
            onLoad={() => this.loadGoods(get5First)}
          />
          <Button
            name="Load red goods"
            onLoad={() => this.loadGoods(getRedGoods)}
          />
        </div>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;

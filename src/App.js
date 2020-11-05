import React from 'react';
import { GoodsList } from './Components/GoodsList';
import { Button } from './Components/Button';

import 'semantic-ui-css/semantic.min.css';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state ={
    goods: [],
  }

  setGoods = async(func) => {
    const goods = await func();

    this.setState({
      goods,
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <Button
          name="Load All goods"
          callback={() => this.setGoods(getAll)}
        />

        <Button
          name="Load first 5 goods"
          callback={() => this.setGoods(get5First)}
        />

        <Button
          name="Load red goods"
          callback={() => this.setGoods(getRedGoods)}
        />

        {goods.length > 0 && (
          <GoodsList
            goods={goods}
          />
        )}
      </div>
    );
  }
}

export default App;

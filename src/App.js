import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';
import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  }

  render() {
    const { goods } = this.state;
    const addGoods = async(func) => {
      const currentList = await func();

      this.setState({ goods: currentList });
    };

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="App__buttons-block">
          <Button
            text="Load All goods"
            callback={() => addGoods(getAll)}
          />
          <Button
            text="Load 5 first goods"
            callback={() => addGoods(get5First)}
          />
          <Button
            text="Load red goods"
            callback={() => addGoods(getRedGoods)}
          />
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

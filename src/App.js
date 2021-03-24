import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';
import { GoodList } from './components/GoodList/GoodList';
import { Button } from './components/Button/Button';

class App extends React.Component {
  state = {
    goods: [],
  }

  clickHandler = (good) => {
    good()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <Button
          onClick={() => this.clickHandler(getAll)}
          text="All goods"
        />
        <Button
          onClick={() => this.clickHandler(get5First)}
          text="Load 5 first goods"
        />
        <Button
          onClick={() => this.clickHandler(getRedGoods)}
          text="Load red goods"
        />
        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;

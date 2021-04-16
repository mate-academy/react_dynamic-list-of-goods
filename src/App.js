import React from 'react';

import './App.scss';
import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';
import { ListOfGoods } from './components/ListOfGoods';
import { Button } from './components/Button';

class App extends React.Component {
  state = {
    goods: '',
  }

  clickHandler = (sortCallback) => {
    sortCallback()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button
          text="Load All"
          onClick={() => this.clickHandler(getAllGoods)}
        />

        <Button
          text="Load 5 first"
          onClick={() => this.clickHandler(get5FirstGoods)}
        />

        <Button
          text="Load only Red"

          onClick={() => this.clickHandler(getRedGoods)}
        />

        {goods.length > 0
      && <ListOfGoods goods={goods} />}
      </>
    );
  }
}

export default App;

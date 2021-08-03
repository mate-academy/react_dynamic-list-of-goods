import React from 'react';
import './App.scss';
import { ListOfGoods } from './components/ListOfGoods';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './components/Button';

class App extends React.Component {
  state = {
    goods: [],
  }

  setGoods = async(getGoods) => {
    const goods = await getGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button
          buttonText="Load All goods"
          onClick={() => this.setGoods(getAll)}
        />
        <Button
          buttonText="Load 5 first goods"
          onClick={() => this.setGoods(get5First)}
        />
        <Button
          buttonText="Load red goods"
          onClick={() => this.setGoods(getRedGoods)}
        />
        <ListOfGoods goods={goods} />
      </>
    );
  }
}

export default App;

import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import 'bulma';
import './App.scss';
import { Button } from './components/Button/Button';

class App extends React.Component {
  state = {
    goods: [],
  }

  handleClick = async(getGoods) => {
    const goods = await getGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;
    const { handleClick } = this;

    return (
      <div className="box">
        <h1
          className="title"
        >
          Dynamic list of Goods
        </h1>
        <div className="buttons">
          <Button
            text="All goods"
            onClick={() => handleClick(getAll)}
            className="is-warning"
          />
          <Button
            text="Five goods"
            onClick={() => handleClick(get5First)}
            className="is-warning"
          />
          <Button
            text="Red goods"
            onClick={() => handleClick(getRedGoods)}
            className="is-warning"
          />
        </div>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;

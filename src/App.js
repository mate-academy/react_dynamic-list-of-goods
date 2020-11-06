import React, { PureComponent } from 'react';
import { GoodsList } from './components/goodsList';
import { Buttons } from './components/buttons';
import './App.scss';

class App extends PureComponent {
  state = {
    goods: [],
  }

  handleGoods = (goods) => {
    this.setState({ goods });
  }

  getGoods = (callback) => {
    callback()
      .then(this.handleGoods);
  }

  cleanGoods = () => this.handleGoods([]);

  render() {
    const { cleanGoods, getGoods } = this;
    const { goods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          Dynamic list of Goods
        </h1>

        {
          goods.length === 0
            ? (<Buttons getGoods={getGoods} />)
            : (<GoodsList goods={goods} cleanGoods={cleanGoods} />)
        }
      </div>
    );
  }
}

export default App;

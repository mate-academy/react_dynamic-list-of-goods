import React from 'react';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GoodsList } from './components/GoodsList';
import { Buttons } from './components/Buttons';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = async(callback) => {
    const goods = await callback();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <Buttons clickHandler={this.loadGoods} />
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;

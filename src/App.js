import React from 'react';
import 'bulma';

import './App.scss';

import { GoodsList } from './components/GoodsList';
import { Buttons } from './components/Buttons';

class App extends React.Component {
  state = {
    goods: null,
  }

  addGoods = async(callback) => {
    const goods = await callback();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1 className="title">
          Dynamic list of Goods
        </h1>

        <Buttons
          addGoods={this.addGoods}
        />

        <div className="content">
          {goods && (
            <GoodsList goods={goods} />
          )}
        </div>
      </>
    );
  }
}

export default App;

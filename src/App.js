import React, { PureComponent } from 'react';
import 'bulma';

import { GoodsList } from './components/GoodsList/GoodsList';
import { ButtonsGroup } from './components/ButtonsGroup/ButtonsGroup';

import './App.scss';

class App extends PureComponent {
  state = {
    goods: [],
  }

  loadGoodsList = async(getTypeFunction) => {
    const goods = await getTypeFunction;

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <section className="app">
        <h1>Dynamic list of Goods</h1>
        <ButtonsGroup onClick={this.loadGoodsList} />
        <GoodsList goods={goods} />
      </section>
    );
  }
}

export default App;

import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import 'semantic-ui-css/semantic.min.css';
import { Buttons } from './components/Buttons/Buttons';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  };

  handleGoods = (calback) => {
    calback()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="ui header">Dynamic list of Goods</h1>
        <Buttons
          getAll={getAll}
          get5First={get5First}
          getRedGoods={getRedGoods}
          handleGoods={this.handleGoods}
        />
        <GoodsList goods={goods} />
      </div>
    );
  }
}

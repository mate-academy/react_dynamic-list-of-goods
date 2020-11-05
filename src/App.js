import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import 'semantic-ui-css/semantic.min.css';
import { Buttons } from './components/Buttons/Buttons';

import './App.scss';

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
          handleGoods={this.handleGoods}
        />
        <GoodsList goods={goods} />
      </div>
    );
  }
}

import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

interface State {
  goods: Good[];
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  setAll = () => {
    getAll()
      .then((goods: Good[]) => {
        this.setState({
          goods,
        });
      });
  };

  set5First = () => {
    get5First()
      .then((goods: Good[]) => {
        this.setState({
          goods,
        });
      });
  };

  setRedGoods = () => {
    getRedGoods()
      .then((goods: Good[]) => {
        this.setState({
          goods,
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button
          setAll={this.setAll}
          set5First={this.set5First}
          setRedGoods={this.setRedGoods}
        />
        <GoodsList goods={goods} />
      </>
    );
  }
}

import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import { getAll, get5First, getRedGoods } from './api/goods';
import Buttons from './components/Buttons/Buttons';
import List from './components/List/List';

import './App.scss';

export default class App extends PureComponent {
  state={
    goods: [],
  }

  setGoods = async(getButtonName) => {
    let goods = [];

    switch (getButtonName) {
      case 'allGoods': goods = await getAll(); break;
      case 'firstGoods': goods = await get5First(); break;
      case 'redGoods': goods = await getRedGoods(); break;
      default: return 'Something wrong';
    }

    this.setState({
      goods,
    });

    return this.state.goods;
  }

  render() {
    return (
      <Card className="card">
        <Card.Body>
          <Card.Title>
            <Buttons getGoods={this.setGoods} />
          </Card.Title>
          <Card.Text>
            <List goods={this.state.goods} />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

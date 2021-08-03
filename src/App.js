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

  setGoods = async(getGoods) => {
    let goods = [];

    goods = await getGoods();

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
            <Buttons
              getGoods={this.setGoods}
              getAll={getAll}
              get5First={get5First}
              getRedGoods={getRedGoods}
            />
          </Card.Title>
          <Card.Text>
            <List goods={this.state.goods} />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

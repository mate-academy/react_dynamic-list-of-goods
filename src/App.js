import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { ButtonTypeOne } from './Components/ButtonTypeOne/Button';
import { getAll, get5First, getRedGoods } from './api/goods';
import { ListItem } from './Components/ListItem/ListItem';

import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  setAll = () => {
    getAll().then(goods => this.setState({ goods }));
  }

  set5First = () => {
    get5First().then(goods => this.setState({ goods }));
  }

  setRedGoods = () => {
    getRedGoods().then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="App__container-button">
          <ButtonTypeOne
            buttonName="Load All goods"
            onClick={this.setAll}
          />
          <ButtonTypeOne
            buttonName="Load 5 first goods"
            onClick={this.set5First}
          />
          <ButtonTypeOne
            buttonName="Load red goods"
            onClick={this.setRedGoods}
          />
        </div>
        <ListGroup className="App__list">
          <ListItem list={goods} />
        </ListGroup>
      </div>
    );
  }
}

export default App;

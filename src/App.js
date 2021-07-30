import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Buttons } from './components/Button/Buttons';
import { List } from './components/List/List';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = (action) => {
    action()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { getGoods } = this;
    const { goods } = this.state;

    return (
      <>
        <div className="buttons">
          <Buttons
            getGoods={getGoods}
            action={getAll}
            text="Show all"
          />
          <Buttons
            getGoods={getGoods}
            action={get5First}
            text="Show all"
          />
          <Buttons
            getGoods={getGoods}
            action={getRedGoods}
            text="Show all"
          />
        </div>

        <List goods={goods} />
      </>
    );
  }
}

export default App;

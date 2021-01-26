import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList/GoodList';
import { getAll } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getAllHandler = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  get5FirstHandler = () => {
    getAll()
      .then((goods) => {
        this.setState({
          goods: goods
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 5),
        });
      });
  };

  getRedHandler = () => {
    getAll()
      .then((goods) => {
        this.setState({
          goods: goods.filter(good => good.color === 'red'),
        });
      });
  };

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <GoodList goods={this.state.goods} />
        <button onClick={this.getAllHandler} type="button">getAll</button>
        <button onClick={this.get5FirstHandler} type="button">get5First</button>
        <button onClick={this.getRedHandler} type="button">getRed</button>
      </div>
    );
  }
}

export default App;

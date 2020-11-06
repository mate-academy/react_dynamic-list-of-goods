import React from 'react';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  setGoods = (func) => {
    func().then((goods) => {
      this.setState({
        goods,
      });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1>Dynamic list of Goods</h1>

        <Button
          color="green"
          title="Get All"
          handleClick={() => (
            this.setGoods(getAll)
          )}
        />

        <Button
          color="orange"
          title="Get five"
          handleClick={() => (
            this.setGoods(get5First)
          )}
        />

        <Button
          color="red"
          title="Get red"
          handleClick={() => (
            this.setGoods(getRedGoods)
          )}
        />

        <div className="app_list">
          <GoodsList goods={goods} />
        </div>
      </div>
    );
  }
}

export default App;

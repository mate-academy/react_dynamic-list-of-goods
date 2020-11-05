import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodList } from './components/GoodList';
import { Button } from './components/Button';

class App extends React.Component {
  state = {
    goods: [],
  }

  setGoods = (functionType) => {
    functionType()
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
        <div>
          <Button
            text="All"
            setGoods={() => this.setGoods(getAll)}
          />
          <Button
            text="5 First"
            setGoods={() => this.setGoods(get5First)}
          />
          <Button
            text="Red"
            setGoods={() => this.setGoods(getRed)}
          />
        </div>

        <GoodList
          goods={goods}
        />
      </div>
    );
  }
}

export default App;

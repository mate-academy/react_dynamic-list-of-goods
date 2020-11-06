import React from 'react';
import { Button } from './components/Button';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  changeList(func) {
    func()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (

      <main>
        <Button
          title="Get All"
          callback={() => this.changeList(getAll)}
        />
        <Button
          title="Get first 5"
          callback={() => this.changeList(get5First)}
        />
        <Button
          title="Get red"
          callback={() => this.changeList(getRed)}
        />

        {goods.map(good => (
          <ul key={good.id}>
            <li style={{ color: good.color }}>{good.name}</li>
          </ul>
        ))}
      </main>
    );
  }
}

export default App;

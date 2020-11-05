import React from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './Components/GoodsList';
import { Button } from './Components/Button';

const buttons = [
  {
    text: 'Load all goods',
    onClick: getAll,
  },
  {
    text: 'Load 5 first goods',
    onClick: get5First,
  },
  {
    text: 'Get red goods',
    onClick: getRedGoods,
  },
];

class App extends React.PureComponent {
  state = {
    goods: [],
  };

  handleChange = (dataFromServer) => {
    dataFromServer()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Dynamic list of Goods</h1>
        {buttons.map(button => (
          <Button
            key={button.text}
            text={button.text}
            data={button.onClick}
            handleChange={this.handleChange}
          />
        ))}
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

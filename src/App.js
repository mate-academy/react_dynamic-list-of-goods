import React from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './Components/GoodsList';
import { Button } from './Components/Button';

class App extends React.PureComponent {
  state = {
    goods: [],
    data: [
      {
        name: 'Load all goods',
        api: getAll,
      },
      {
        name: 'Load 5 first goods',
        api: get5First,
      },
      {
        name: 'Get red goods',
        api: getRedGoods,
      },
    ],
  };

  handleChange = (dataFromServer) => {
    dataFromServer()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods, data } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Dynamic list of Goods</h1>
        {data.map(itemOfData => (
          <Button
            key={itemOfData.name}
            data={itemOfData}
            handleChange={this.handleChange}
          />
        ))}
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

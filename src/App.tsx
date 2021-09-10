import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

interface State {
  goodsFromServer: Good[],
}

enum RequestType {
  all = 'all',
  fiveFirst = 'fiveFirst',
  red = 'red',
}

class App extends React.Component<{}, State> {
  state = {
    goodsFromServer: [],
  };

  request = async (type: RequestType) => {
    let goods = null;

    switch (type) {
      case 'all':
        goods = await getAll()
          .then(goodsFromServer => this.setState({ goodsFromServer }));

        return goods;
      case 'fiveFirst':
        goods = await get5First()
          .then(goodsFromServer => this.setState({ goodsFromServer }));

        return goods;
      case 'red':
        goods = await getRedGoods()
          .then(goodsFromServer => this.setState({ goodsFromServer }));

        return goods;
      default:
        return null;
    }
  };

  render() {
    const { goodsFromServer } = this.state;

    return (
      <div className="container">
        <div className="App">
          {goodsFromServer.length > 0 && (
            <GoodsList goods={goodsFromServer} />
          )}

          <div className="App__buttons">
            <Button
              text="Load all goods"
              action={() => this.request('all' as RequestType.all)}
              className="App__button"
            />

            <Button
              text="Load 5 first goods"
              action={() => this.request('fiveFirst' as RequestType.fiveFirst)}
              className="App__button"
            />

            <Button
              text="Load red goods"
              action={() => this.request('red' as RequestType.red)}
              className="App__button"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

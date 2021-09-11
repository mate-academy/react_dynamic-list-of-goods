import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

interface State {
  goodsFromServer: Good[];
  hasRequestError: boolean;
}

enum RequestType {
  all = 'all',
  fiveFirst = 'fiveFirst',
  red = 'red',
}

class App extends React.Component<{}, State> {
  state = {
    goodsFromServer: [],
    hasRequestError: false,
  };

  request = async (type: RequestType) => {
    let goods = null;

    switch (type) {
      case 'all':
        try {
          goods = await getAll()
            .then(goodsFromServer => this.setState({ goodsFromServer }));

          return goods;
        } catch (error) {
          this.setState({
            hasRequestError: true,
          });

          return null;
        }

      case 'fiveFirst':
        try {
          goods = await get5First()
            .then(goodsFromServer => this.setState({ goodsFromServer }));

          return goods;
        } catch (error) {
          this.setState({
            hasRequestError: true,
          });

          return null;
        }

      case 'red':
        try {
          goods = await getRedGoods()
            .then(goodsFromServer => this.setState({ goodsFromServer }));

          return goods;
        } catch (error) {
          this.setState({
            hasRequestError: true,
          });

          return null;
        }

      default:
        return null;
    }
  };

  render() {
    const { goodsFromServer, hasRequestError } = this.state;

    return (
      <div className="container">
        <div className="App">
          {goodsFromServer.length > 0 && (
            <GoodsList goods={goodsFromServer} />
          )}

          {hasRequestError && (
            <p
              className="App__error-message"
            >
              Seems like we have an error here
            </p>
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

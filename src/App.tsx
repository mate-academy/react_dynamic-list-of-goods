import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

interface State {
  goods: Good[];
  hasRequestError: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    hasRequestError: false,
  };

  makeRequest = async (query: () => Promise<Good[]>) => {
    let requestResult = null;

    try {
      requestResult = await query()
        .then(goods => this.setState({ goods }));

      return requestResult;
    } catch (error) {
      this.setState({
        hasRequestError: true,
      });
    }

    return requestResult;
  };

  render() {
    const { goods, hasRequestError } = this.state;

    return (
      <div className="container">
        <div className="App">
          {goods.length > 0 && (
            <GoodsList goods={goods} />
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
              action={() => this.makeRequest(getAll)}
              className="App__button"
            />

            <Button
              text="Load 5 first goods"
              action={() => this.makeRequest(get5First)}
              className="App__button"
            />

            <Button
              text="Load red goods"
              action={() => this.makeRequest(getRedGoods)}
              className="App__button"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

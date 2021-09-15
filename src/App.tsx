import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

interface State {
  goods: Good[];
  errorMessage: string;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    errorMessage: '',
  };

  getGoods = async (getRelevantGoods: () => Promise<Good[]>) => {
    try {
      const goods = await getRelevantGoods();

      this.setState({ goods, errorMessage: '' });
    } catch (error) {
      this.setState({ errorMessage: 'Please wait' });
    }
  };

  render() {
    const { goods, errorMessage } = this.state;

    return (
      <>
        <h1 className="text-center py-2">Dynamic list of Goods</h1>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="border bg-primary rounded text-light py-2 m-2"
            type="submit"
            onClick={() => this.getGoods(getAll)}
          >
            Load All goods
          </button>

          <button
            className="border bg-primary rounded text-light py-2 m-2"
            type="submit"
            onClick={() => this.getGoods(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            className="border bg-primary rounded text-light py-2 m-2"
            type="submit"
            onClick={() => this.getGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        { !errorMessage ? (
          <GoodsList
            goods={goods}
          />
        )
          : (
            { errorMessage }
          )}
      </>
    );
  }
}

export default App;

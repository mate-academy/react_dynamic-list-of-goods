import { Component } from 'react';
import { List } from './components/List';
import { LoadingError } from './components/LoadingError';
import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Loader } from './components/Loader';
// or
// import * as goodsAPI from './api/goods';

interface State {
  goodsList: Good[];
  isStarted: boolean;
  loading: boolean;
  error: boolean;
}

class App extends Component<{}, State> {
  state: State = {
    goodsList: [],
    isStarted: false,
    loading: false,
    error: false,
  };

  displayList = async () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));

    await this.loadGoods(getAll);
  };

  loadGoods = async (goodsFromServer: () => Promise<Good[]>) => {
    this.setState({ error: false, loading: true });
    try {
      const goods = await goodsFromServer();

      this.setState({ goodsList: goods, error: false, loading: false });
    } catch {
      this.setState({ error: true });
    }
  };

  render() {
    const {
      isStarted, goodsList, error, loading,
    } = this.state;

    return (
      <div className="App">
        <div className="App__head">
          <h1 className="App__title">Goods</h1>
          <button
            type="button"
            className={`App__btn App__start ${isStarted && !error && 'App__hiden'}`}
            onClick={this.displayList}
          >
            Start
          </button>
        </div>
        <div className="App__cont">
          <button
            type="button"
            className={`App__btn ${!isStarted && 'App__hiden'}`}
            onClick={() => this.loadGoods(get5First)}
          >
            Get First 5
          </button>
          <button
            type="button"
            className={`App__btn ${!isStarted && 'App__hiden'}`}
            onClick={() => this.loadGoods(getRedGoods)}
          >
            Get only Red
          </button>
          <button
            type="button"
            className={`App__btn ${!isStarted && 'App__hiden'}`}
            onClick={() => this.loadGoods(getAll)}
          >
            Get all Goods
          </button>
        </div>
        <ul className="App__list">
          {error && <LoadingError />}
          {!error && (loading ? <Loader /> : <List goods={goodsList} />)}
        </ul>
      </div>
    );
  }
}

export default App;

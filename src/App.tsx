import { Component } from 'react';
import { Oval } from 'react-loader-spinner';
import { List } from './List';
import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface State {
  goodsList: Good[];
  loading: boolean;
  error: boolean;
}

class App extends Component<{}, State> {
  state: State = {
    goodsList: [],
    loading: false,
    error: false,
  };

  loadGoods = async (goodsFromServer: () => Promise<Good[]>) => {
    this.setState({ error: false, loading: true });
    try {
      const goods = await goodsFromServer();

      this.setState({ goodsList: goods, error: false, loading: false });
    } catch {
      this.setState({ error: true, loading: false });
    }
  };

  render() {
    const {
      goodsList, error, loading,
    } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        <div className="App__buttons">
          <button
            type="button"
            className="App__button"
            onClick={() => this.loadGoods(getAll)}
          >
            Get all Goods
          </button>
          <button
            type="button"
            className="App__button"
            onClick={() => this.loadGoods(get5First)}
          >
            Get First 5
          </button>
          <button
            type="button"
            className="App__button"
            onClick={() => this.loadGoods(getRedGoods)}
          >
            Get only Red
          </button>
        </div>
        <ul className="App__list">
          {error && (
            <div className="notification">
              Something went wrong. Try again
            </div>
          )}
          {!error && (loading ? <Oval color="#ff6600" height={80} width={80} /> : <List goods={goodsList} />)}
        </ul>
      </div>
    );
  }
}

export default App;

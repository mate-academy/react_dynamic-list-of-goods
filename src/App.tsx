import { Component } from 'react';
import { List } from './components/List';
import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

interface State {
  goodsList: Good[];
  isStarted: boolean;
}

class App extends Component<{}, State> {
  state: State = {
    goodsList: [],
    isStarted: false,
  };

  async componentDidMount() {
    await this.loadGoods(getAll);
  }

  displayList = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  loadGoods = async (goodsFromServer: () => Promise<Good[]>) => {
    const goods = await goodsFromServer();

    this.setState({ goodsList: goods });
  };

  render() {
    const { isStarted, goodsList } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        <button
          type="button"
          className={`App__btn ${isStarted && 'App__hiden'}`}
          onClick={this.displayList}
        >
          Start
        </button>
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
        <ul className="App__list">
          {isStarted && goodsList.length > 0 && <List goods={goodsList} />}
        </ul>
      </div>
    );
  }
}

export default App;

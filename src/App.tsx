import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goodsFromServer: Good[] | []
};

class App extends React.Component<{}, State> {
  state: State = {
    goodsFromServer: [],
  };

  render() {
    return (
      <div className="App">
        <h1 className="funny-title section-title">Dynamic list of Goods</h1>
        <div className="App__buttons-container">
          <button
            type="button"
            onClick={async () => {
              this.setState({
                goodsFromServer: await getAll(),
              });
            }}
            className="button"
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={async () => {
              this.setState({
                goodsFromServer: await get5First(),
              });
            }}
            className="button"
          >
            Get 5 first
          </button>
          <button
            type="button"
            onClick={async () => {
              this.setState({
                goodsFromServer: await getRedGoods(),
              });
            }}
            className="button"
          >
            Get red goods
          </button>
        </div>
        {this.state.goodsFromServer !== [] && <GoodsList goods={this.state.goodsFromServer} />}
      </div>
    );
  }
}

export default App;

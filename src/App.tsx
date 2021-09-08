import React from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    data: null,
  };

  render() {
    return (
      <>
        <h1>
          Dynamic list of goods
        </h1>

        <div>
          <button
            onClick={() => {
              getAll().then(data => {
                this.setState({ data });
              });
            }}
            type="button"
            className="button"
          >
            Load All goods
          </button>
          <button
            onClick={() => {
              get5First().then(data => {
                this.setState({ data });
              });
            }}
            type="button"
            className="button"
          >
            Load 5 first goods
          </button>
          <button
            onClick={() => {
              getRedGoods().then(data => {
                this.setState({ data });
              });
            }}
            type="button"
            className="button"
          >
            Load red goods
          </button>
        </div>

        {this.state.data && (
          <GoodsList data={this.state.data} />
        )}
      </>
    );
  }
}

export default App;

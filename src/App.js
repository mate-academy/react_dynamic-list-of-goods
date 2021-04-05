import React from 'react';

import './App.scss';
import { GoodsList } from './component/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.PureComponent {
  state={
    loadGoods: false,
    goodsList: [],
  }

  render() {
    return (
      <>

        <h1>Dynamic List</h1>

        <div className="App__buttons">
          <button
            className="list-button"
            type="button"
            onClick={() => {
              getAll()
                .then((result) => {
                  this.setState({
                    goodsList: result,
                    loadGoods: true,
                  });
                });
            }}
          >
            Load All goods
          </button>

          <button
            className="list-button"
            type="button"
            onClick={() => {
              get5First()
                .then((result) => {
                  this.setState({
                    goodsList: result,
                    loadGoods: true,
                  });
                });
            }}
          >
            Load first five goods
          </button>

          <button
            className="list-button"
            type="button"
            onClick={() => {
              getRedGoods()
                .then((result) => {
                  this.setState({
                    goodsList: result,
                    loadGoods: true,
                  });
                });
            }}
          >
            Load red goods
          </button>

        </div>

        {this.state.loadGoods && (
          <GoodsList goodsList={this.state.goodsList} />
        )}

      </>
    );
  }
}

export default App;

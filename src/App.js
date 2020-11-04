import React, { Component } from 'react';
import './App.scss';
import { Button } from './components/Button';
import { GoodsList } from './components/List';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends Component {
  state = {
    list: [],
  }

  loadList = (getData) => {
    getData()
      .then(result => this.setState({
        list: result,
      }));
  }

  render() {
    const { list } = this.state;
    const { loadList } = this;

    return (
      <>
        <h1 className="text-center mt-3">Dynamic list of Goods</h1>

        <div className="d-flex justify-content-center mt-5">
          <Button
            title="Load All goods"
            loadList={() => loadList(getAll)}
          />
          <Button
            title="Load 5 first goods"
            loadList={() => loadList(get5First)}
          />
          <Button
            title="Load red goods"
            loadList={() => loadList(getRedGoods)}
          />
        </div>

        {list.length ? (
          <div className="d-flex justify-content-center mt-5">
            <GoodsList list={list} />
          </div>
        ) : (
          <h3 className="text-center mt-3 text-secondary">
            Click any  button to load list
          </h3>
        )}
      </>
    );
  }
}

export default App;

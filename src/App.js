import React from 'react';
import { GoodsList } from './api/components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';

export class App extends React.Component {
  state = {
    goods: [],
  }

  getList = async(method) => {
    const response = await method();

    this.setState({
      goods: await response,
    });
  }

  hideList = () => {
    this.setState({
      goods: [],
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1 className="headerName">Dynamic list of Goods</h1>
        <div className="container">
          {goods.length === 0 ? (
            <button
              className="button is-link"
              type="button"
              onClick={() => {
                this.getList(getAll);
              }}
            >
              Show list of goods
            </button>
          ) : (
            <>
              <button
                className="button is-link"
                type="button"
                onClick={this.hideList}
              >
                Hide
              </button>
              <button
                type="button"
                className="button is-primary"
                onClick={() => {
                  this.getList(getAll);
                }}
              >
                Load All goods
              </button>
              {' '}
              <button
                type="button"
                className="button is-primary"
                onClick={() => {
                  this.getList(get5First);
                }}
              >
                Load 5 first goods
              </button>
              {' '}
              <button
                type="button"
                className="button is-primary"
                onClick={() => {
                  this.getList(getRedGoods);
                }}
              >
                Load red goods
              </button>
              <GoodsList goods={goods} />
            </>
          )}
        </div>
      </>
    );
  }
}

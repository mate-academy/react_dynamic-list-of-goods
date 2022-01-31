import React from 'react';
import { message } from 'antd';
import './App.scss';
import 'antd/dist/antd.css';
import { GoodsList } from './Components/GoodsList/GoodsList';
import { Loading } from './Components/Loading/Loading';

import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[],
  loading: boolean,
}

type Good = {
  id: number,
  name: string,
  color: string,
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
    loading: false,
  };

  loadGoods = async (callback: () => Promise<Good[]>) => {
    try {
      this.setState({ loading: true });
      const goods = await callback();

      this.setState({ goods, loading: false });
    } catch (error) {
      message.error({
        content: 'An error occured when loading goods! Check internet connection',
        style: {
          fontSize: '18px',
          padding: '15px 10px',
        },
      });
    }
  };

  render() {
    const {
      goods,
      loading,
    } = this.state;

    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>
        <div className="btnContainer">
          <button
            className="button"
            type="button"
            onClick={() => this.loadGoods(getAll)}
            disabled={loading}
          >
            Load All goods
          </button>
          <button
            className="button"
            type="button"
            onClick={() => this.loadGoods(get5First)}
            disabled={loading}
          >
            Load 5 first goods
          </button>
          <button
            className="button"
            type="button"
            onClick={() => this.loadGoods(getRedGoods)}
            disabled={loading}
          >
            Load red goods
          </button>
        </div>
        {loading ? <Loading /> : <GoodsList goods={goods} />}
      </div>
    );
  }
}

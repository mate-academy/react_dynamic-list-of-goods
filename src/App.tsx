import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import * as goodsAPI from './api/goods';

type Props = {};
type State = {
  goods: Good[],
};

export class App extends React.PureComponent<Props, State> {
  state: State = {
    goods: [],
  };

  componentDidMount() {
    this.getAllGoods();
  }

  getAllGoods = () => {
    goodsAPI.getAll()
      .then(goodsFromServer => {
        this.setState({
          goods: [...goodsFromServer],
        });
      });
  };

  getFirstFive = () => {
    goodsAPI.getFirstFive()
      .then(goodsFromServer => {
        this.setState({
          goods: [...goodsFromServer],
        });
      });
  };

  getRedGoods = () => {
    goodsAPI.getRedGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer,
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => (
            this.getAllGoods()
          )}
        >
          Get all
        </button>
        <button
          type="button"
          onClick={() => (
            this.getFirstFive()
          )}
        >
          Get 5
        </button>
        <button
          type="button"
          onClick={() => (
            this.getRedGoods()
          )}
        >
          Get red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

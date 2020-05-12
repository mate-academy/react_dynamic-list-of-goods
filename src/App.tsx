import React from 'react';
import { getGoods } from './components/goods-service';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Good } from './interfaces';
import { Loading } from './components/Loading/Loading';
import { Button } from './components/Button';

interface State {
  goods: Good[];
  loading: boolean;
}

export default class App extends React.Component<{}, State> {
  state = {
    goods: [],
    loading: false,
  };

  allGoods = () => {
    this.setState({ loading: true });
    getGoods().then((goods) => {
      this.setState({ goods, loading: false });
    });
  };

  firstFiveGoods = () => {
    this.setState({ loading: true });
    getGoods().then((goods) => {
      this.setState({
        goods: goods.sort(
          (a, b) => a.name.localeCompare(b.name),
        ).splice(0, 5),
        loading: false,
      });
    });
  };


  redGoods = () => {
    this.setState({ loading: true });
    getGoods()
      .then((goods) => {
        this.setState({
          goods: goods.filter(good => good.color === 'red'),
          loading: false,
        });
      });
  };

  render() {
    const { goods, loading } = this.state;

    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <Button handleClick={this.allGoods} title="Load All goods" />
          <Button handleClick={this.firstFiveGoods} title="Load 5 first goods" />
          <Button handleClick={this.redGoods} title="Load red goods" />
        </div>

        {loading ? (
          <Loading />
        ) : (
          <GoodsList goodsList={goods} />
        )}
      </div>
    );
  }
}

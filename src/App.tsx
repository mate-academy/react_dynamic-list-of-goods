import React from 'react';

import './App.css';
import { GoodsList } from './components/GoodsList';
import { Buttons } from './components/Buttons';
import { Good, Button } from './components/TypeDefs';
import { getGoods } from './api/api';

interface State {
  goods: Good[];
  loading: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    loading: false,
  };

  handleAllGoods = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      getGoods()
        .then(goods => this.setState({ goods }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 1000);
  };

  handleFiveGoods = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      getGoods()
        .then(goods => {
          this.setState({
            goods: goods
              .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
              .slice(0, 5),
          });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 1000);
  };

  handleRedGoods = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      getGoods()
        .then(goods => {
          this.setState({ goods: goods.filter((good: Good) => good.color === 'red') });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 1000);
  };

  render() {
    const { goods, loading } = this.state;

    const buttonsInit: Button[] = [
      { id: 1, title: 'Load All goods', event: this.handleAllGoods },
      { id: 2, title: 'Load 5 first goods', event: this.handleFiveGoods },
      { id: 3, title: 'Load red goods', event: this.handleRedGoods },
    ];

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        {loading ? (
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        ) : <GoodsList goods={goods} />}
        <Buttons buttonsInit={buttonsInit} />
      </>
    );
  }
}

export default App;

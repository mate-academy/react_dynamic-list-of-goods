import React from 'react';
import './App.scss';

import { getAll } from './api/goods';

import { Form } from './components/Form/Form';

import { State } from './Types';
import { GoodsList } from './components/Goods/GoodsList';

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    onDisplay: false,
    selectedColor: '0',
  };

  goodsForDisplay: Good[] = [];

  componentDidMount() {
    getAll()
      .then(goods => {
        this.setState({ goods });
      });
  }

  printGoods = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (event.currentTarget.id === 'all') {
      this.goodsForDisplay = this.state.goods;
    }

    if (event.currentTarget.id === 'top5') {
      this.goodsForDisplay
        = this.state.goods.filter(good => good.id <= 5);
    }

    this.setState({ onDisplay: true });

    if (event.currentTarget.id === 'byColor') {
      this.setState((state) => (
        {
          selectedColor: state.selectedColor,
          onDisplay: state.selectedColor !== '0' && true,
        }
      ));

      this.goodsForDisplay
        = this.state.goods
          .filter(good => good.color === this.state.selectedColor);
    }
  };

  render() {
    const {
      onDisplay,
    } = this.state;

    return (
      <div className="goods">
        <h1 className="goods__title">Dynamic list of Goods</h1>

        <Form
          goods={this.state.goods}
          printGoods={this.printGoods}
          selectedColor={(color: string) => {
            this.setState({ selectedColor: color });
          }}
        />

        {
          onDisplay && (<GoodsList goodsForDisplay={this.goodsForDisplay} />)
        }
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';

import { getAll } from './api/goods';

import { Form } from './components/Form/Form';
import { GoodsList } from './components/Goods/GoodsList';
import { StateApp } from './Types';

class App extends React.Component<{}, StateApp> {
  state: StateApp = {
    goods: [],
    onDisplay: false,
  };

  goodsForDisplay: Good[] = [];

  componentDidMount() {
    getAll()
      .then(goods => this.setState({ goods }));
  }

  printGoods = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (event.currentTarget.id === 'all') {
      this.goodsForDisplay = this.state.goods;

      this.setState({ onDisplay: true });
    }

    if (event.currentTarget.id === 'top5') {
      this.goodsForDisplay
        = [...this.state.goods]
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(0, 5);

      this.setState({ onDisplay: true });
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
            this.goodsForDisplay
              = this.state.goods
                .filter(good => good.color === color);
            this.setState({ onDisplay: color !== '0' && true });
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

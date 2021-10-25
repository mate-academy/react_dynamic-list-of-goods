import React from 'react';
import './App.scss';

import { Form } from './components/Form/Form';
import { GoodsList } from './components/Goods/GoodsList';
import { StateApp } from './Types';

class App extends React.Component<{}, StateApp> {
  state: StateApp = {
    goods: [],
    onDisplay: false,
  };

  getGoods = (callback: Promise<Good[]>) => {
    callback.then(goods => (
      this.setState({
        goods,
        onDisplay: true,
      })
    ));
  };

  render() {
    const {
      goods,
      onDisplay,
    } = this.state;

    return (
      <div className="goods">
        <h1 className="goods__title">Dynamic list of Goods</h1>

        <Form
          goods={goods}
          getGoods={this.getGoods}
        />

        {
          onDisplay && (<GoodsList goodsForDisplay={goods} />)
        }
      </div>
    );
  }
}

export default App;

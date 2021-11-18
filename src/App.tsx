import React from 'react';
import './App.scss';
import { Good, CallbackType } from './types/Types';

import { GoodsList } from './components/GoodsList';

interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  renderHandler = async (callback: CallbackType) => {
    const newGoods = await callback();

    this.setState({
      goods: newGoods,
    });
  };

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <GoodsList
          goodsToRender={this.state.goods}
          onRender={this.renderHandler}
        />
      </div>
    );
  }
}

export default App;

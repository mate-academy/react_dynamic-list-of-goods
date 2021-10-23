import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

interface State {
  goods: Good[] | null,
}

class App extends React.PureComponent<{}, State> {
  state = {
    goods: null,
  };

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <Button
          name="Show All"
          callback={() => {
            getAll()
              .then(goods => {
                this.setState({ goods });
              });
          }}
        />
        <Button
          name="Show first 5"
          callback={() => {
            get5First()
              .then(goods => {
                this.setState({ goods });
              });
          }}
        />
        <Button
          name="Show Red Goods"
          callback={() => {
            getRedGoods()
              .then(goods => {
                this.setState({ goods });
              });
          }}
        />
        {this.state.goods === null || (<GoodsList goods={this.state.goods} />)}
      </div>
    );
  }
}

export default App;

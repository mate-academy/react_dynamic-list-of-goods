import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods?: Good[],
};

class App extends React.Component<State> {
  state = {
    goods: [],
  };

  getList = (getSample:any) => {
    getSample()
      .then((result:any) => {
        this.setState({
          goods: result,
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
          onClick={() => {
            this.getList(getAll);
          }}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.getList(get5First);
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.getList(getRedGoods);
          }}
        >
          Load red goods
        </button>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;

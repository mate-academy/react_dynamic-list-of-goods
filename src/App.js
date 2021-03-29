import React from 'react';
import GoodsList from './GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={async() => {
            const goods = await getAll();

            this.setState({
              goods,
            });
          }
          }
        >
          Get All
        </button>

        <button
          type="button"
          onClick={async() => {
            const goods = await getRed();

            this.setState({
              goods,
            });
          }
          }
        >
          Get red
        </button>

        <button
          type="button"
          onClick={async() => {
            const goods = await get5First();

            this.setState({
              goods,
            });
          }
          }
        >
          Get 5 first
        </button>

        <GoodsList
          goods={this.state.goods}
        />
      </>
    );
  }
}

export default App;

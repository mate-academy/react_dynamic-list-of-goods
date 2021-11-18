import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';

export interface State {
  goods: Good[],

}

export class App extends React.Component {
  state = {
    goods: [],
  }

  render() {
    return (
      <div className="container" >
        Dynamic list of goods
        <div>
        <button
        className="button"
          type="button"
          onClick={async () => {
            const goods = await getAll();
            this.setState({ goods: goods });
          }}
        >
          show all
        </button>

        <button
        className="button"
          type="button"
          onClick={async () => {
            const goods = await get5First();
            this.setState({ goods: goods });
          }}
        >
          show first 5
        </button>

        <button
        className="button"
          type="button"
          onClick={async () => {
            const goods = await getRed();
            this.setState({ goods: goods });
          }}
        >
          show red ones
        </button>
        </div>
        <GoodsList goods={this.state.goods}/>
      </div>
    )
  }
}

export default App;

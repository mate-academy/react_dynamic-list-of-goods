import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  show = async (getFromServer: () => Promise<Good[]>) => {
    const goodsFromServer = await getFromServer();

    this.setState({ goods: goodsFromServer });
  };

  render() {
    return (
      <>
        <div className="max-w-lg mx-auto mt-8 text-gray-700 p-4">
          <h1 className="text-center text-4xl font-bold mb-4">Dynamic list of Goods</h1>
          <div className="flex justify-center gap-x-3 mb-4 gap-0">
            <button
              type="button"
              onClick={() => this.show(getAll)}
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 shadow-md rounded-full"
            >
              Get All
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 shadow-md rounded-full"
              onClick={() => this.show(get5First)}
            >
              Get 5 First
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 shadow-md rounded-full"
              onClick={() => this.show(getRedGoods)}
            >
              Get red
            </button>
          </div>
          <GoodsList goods={this.state.goods} />
        </div>
      </>
    );
  }
}

export default App;

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

  showAll = async () => {
    const goodsFromServer = await getAll();

    this.setState({ goods: goodsFromServer });
  };

  show5First = async () => {
    const goodsFromServer = await get5First();

    this.setState({ goods: goodsFromServer });
  };

  showRed = async () => {
    const goodsFromServer = await getRedGoods();

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
              onClick={this.showAll}
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 shadow-md rounded-full"
            >
              Get All
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 shadow-md rounded-full"
              onClick={this.show5First}
            >
              Get 5 First
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 shadow-md rounded-full"
              onClick={this.showRed}
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

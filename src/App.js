import React from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import GoodsList from './compnonents/GoodsList/GoodsList';
import Button from './compnonents/Button/Button';

class App extends React.PureComponent {
  state = {
    goods: [],
    isError: false,
  };

  setGoods = async(callback) => {
    try {
      const goods = await callback();

      this.setState({
        goods,
        isError: false,
      });
    } catch (error) {
      this.setState({
        isError: true,
      });
    }
  };

  render() {
    const { goods, isError } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>

        <Button
          getGoods={() => this.setGoods(getAll)}
        >
          Load All Goods
        </Button>

        <Button
          getGoods={() => this.setGoods(get5First)}
        >
          Load First 5
        </Button>

        <Button
          getGoods={() => this.setGoods(getRed)}
        >
          Load Red Goods
        </Button>

        {isError
          ? (
            <div className="alert alert-danger w-50 mt-3" role="alert">
              Ooops..something went wrong
            </div>
          )
          : <GoodsList goods={goods} />
        }
      </div>
    );
  }
}

export default App;

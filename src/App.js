import React from 'react';
import './App.scss';

import { getAll, get5First, getRed, testFakeApi } from './api/goods';
import GoodsList from './compnonents/GoodsList/GoodsList';
import Button from './compnonents/Button/Button';

class App extends React.PureComponent {
  state = {
    goods: [],
    isError: false,
  };

  setGoods = (goods) => {
    this.setState({
      goods,
      isError: false,
    });
  };

  ifError = () => {
    this.setState({ isError: true });
  };

  render() {
    const { goods, isError } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>

        <Button
          getGoods={getAll}
          setGoods={this.setGoods}
          ifError={this.ifError}
        >
          Load All Goods
        </Button>

        <Button
          getGoods={get5First}
          setGoods={this.setGoods}
          ifError={this.ifError}
        >
          Load First 5
        </Button>

        <Button
          getGoods={getRed}
          setGoods={this.setGoods}
          ifError={this.ifError}
        >
          Load Red Goods
        </Button>

        <Button
          className="btn btn-warning ml-3"
          getGoods={testFakeApi}
          setGoods={this.setGoods}
          ifError={this.ifError}
        >
          Try make Error
        </Button>

        {isError
          ? (
            <div className="alert alert-danger w-50 mt-3" role="alert">
              Ooops..Error 404
            </div>
          )
          : <GoodsList goods={goods} />
        }
      </div>
    );
  }
}

export default App;

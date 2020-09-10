import React from 'react';

import './App.scss';

import { GoodsList } from './components/GoodsList';
import { LoadButtons } from './components/LoadButtons';

class App extends React.Component {
  state = {
    listOfGoods: [],
  }

  loadGoods = (typeOfList) => {
    typeOfList()
      .then((goods) => {
        this.setState({ listOfGoods: goods });
      });
  }

  render() {
    const { listOfGoods } = this.state;

    if (listOfGoods.length === 0) {
      return (
        <>
          <h1>Dynamic list of Goods</h1>
          <LoadButtons
            allGoods={this.loadGoods}
            firstFiveGoods={this.loadGoods}
            redGoods={this.loadGoods}
          />
        </>
      );
    }

    return (
      <>
        <GoodsList
          goods={listOfGoods}
        />

        <LoadButtons
          allGoods={this.loadGoods}
          firstFiveGoods={this.loadGoods}
          redGoods={this.loadGoods}
        />
      </>
    );
  }
}

export default App;

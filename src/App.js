import React from 'react';
import { GoodsList } from './components/goodsList/goodsList';
import { Buttons } from './components/buttons/buttons';
import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  }

  clickHandler = (promis) => {
    promis
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1>Dinamic List of Goods </h1>
        <div>
          <Buttons onClick={this.clickHandler} />
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

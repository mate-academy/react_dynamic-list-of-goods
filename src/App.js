import React from 'react';
import './App.css';
import GoodsList from './goodsList';
import getGoods from './goodsApi';
import Filters from './filters';

class App extends React.Component {
  state = {
    goods: [],
  };

  buttons = [
    {
      title: 'all goods',
      method: () => {
        getGoods()
          .then(data => this.setState({
            goods: data,
          }));
      },
    },

    {
      title: 'firs 5 goods',
      method: () => {
        getGoods()
          .then(data => this.setState({
            goods: [...data
              .sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5)],
          }));
      },
    },
    {
      title: 'red goods',
      method: () => {
        getGoods()
          .then(data => this.setState({
            goods: data.filter(good => good.color === 'red'),
          }));
      },
    },
  ];

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <div className="container">
          <section>

            <Filters buttons={this.buttons} />
            <GoodsList goods={goods} />
          </section>
        </div>
      </div>
    );
  }
}

export default App;

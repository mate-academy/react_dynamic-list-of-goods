import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

// eslint-disable-next-line max-len
const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadGoods= () => {
    fetch(URL).then(resp => resp.json()).then(data => (
      this.setState({ goods: [...data] })));
    document.querySelector('.button1').remove();
  };

  load5FirstGoods = () => {
    fetch(URL).then(resp => resp.json()).then(data => (
      this.setState({ goods: [...data.splice(0, 5)] })));
    document.querySelector('.button2').remove();
  };

  loadRedColoredGoods = () => {
    fetch(URL).then(resp => resp.json()).then(data => (
      this.setState({ goods: [...data
        .filter(item => item.color === 'red')] })));
    document.querySelector('.button3').remove();
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <section>
          <div>
            <button type="button" className="button1" onClick={this.loadGoods}>
              Load goods
            </button>
            <button
              type="button"
              className="button2"
              onClick={this.load5FirstGoods}
            >
              Load 5 first goods
            </button>
            <button
              type="button"
              className="button3"
              onClick={this.loadRedColoredGoods}
            >
              Load red goods
            </button>
            <GoodsList goods={this.state.goods} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;

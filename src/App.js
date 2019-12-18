import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

// eslint-disable-next-line max-len
const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

class App extends React.Component {
  state = {
    goods: [],
    buttonStatus: '',
  };

  loadGoods= () => {
    fetch(URL).then(resp => resp.json()).then(data => (
      this.setState({
        goods: [...data],
        buttonStatus: '1',
      })));
  };

  load5FirstGoods = () => {
    fetch(URL).then(resp => resp.json()).then(data => (
      this.setState({
        goods: [...data.sort((a, b) => (a.name.localeCompare(b.name)))
          .splice(0, 5)],
        buttonStatus: '2',
      })));
  };

  loadRedColoredGoods = () => {
    fetch(URL).then(resp => resp.json()).then(data => (
      this.setState({
        goods: [...data.filter(item => item.color === 'red')],
        buttonStatus: '3',
      })));
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <section>
          <div>
            <button
              type="button"
              className={this.state.buttonStatus === '1' ? 'not-visible' : ''}
              onClick={this.loadGoods}
            >
              Load goods
            </button>
            <button
              type="button"
              className={this.state.buttonStatus === '2' ? 'not-visible' : ''}
              onClick={this.load5FirstGoods}
            >
              Load 5 first goods
            </button>
            <button
              type="button"
              className={this.state.buttonStatus === '3' ? 'not-visible' : ''}
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

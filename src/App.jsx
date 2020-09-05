import React from 'react';
import './App.css';
import { Goodlist } from './components/GoodList/GoodList';

const url = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`

class App extends React.Component {
  state = {
    goods: [],
  }

  getAll = async () => {
    const api = await fetch(url)
    const data = await api.json();
    this.setState({
      goods: data,
    })
  }

  get5 = async () => {
    const api = await fetch(url)
    const data = await api.json();
    console.log(data.length)
    data.length = 6;
    this.setState({
      goods: data,
    })
  }

  getRed = async () => {
    const api = await fetch(url);
    const data = await api.json();
    console.log(data.length);
    const redGood = data.filter(good=>(good.color==='red'));

    this.setState({
      goods: redGood,
    });
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.getAll}>Load All goods</button>
        <button type="button" onClick={this.get5}>Load 5 first goods</button>
        <button type="button" onClick={this.getRed}>Load red goods</button>
        <Goodlist goods = {this.state.goods} />
      </>
    );
  }
}

export default App;

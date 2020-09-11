import React from 'react';
import './App.css';
import { Goodlist } from './components/GoodList/GoodList';

const api_url = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`

class App extends React.Component {
  state = {
    goods: [],
  }

  getAll = async () => {
    const api = await fetch(api_url)
    const data = await api.json();
    this.setState({
      goods: data,
    })
  }

  get5 = async () => {
    const api = await fetch(api_url)
    const data = await api.json();
    console.log(data.length)
    this.setState({
      goods: data.slice(0,5),
    })
  }

  getRed = async () => {
    const api = await fetch(api_url)
    const data = await api.json();
    console.log(data.length);
    const redGood = data.filter(good=>(
      good.color==='red'
    ));

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

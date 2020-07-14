import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';
import { loadGoodsList } from './api';
import { GoodsListItem } from './interfaces';

interface State {
  isLoading: boolean;
  goods: GoodsListItem[];
}

class App extends React.Component {
  state: State = {
    isLoading: false,
    goods: [],
  };

  loadWholeList = async () => {
    this.setState({
      isLoading: true,
    });

    const goods = await loadGoodsList<GoodsListItem>();

    this.setState({
      isLoading: false,
      goods: goods.data,
    });
  };

  loadFiveItems = async () => {
    this.setState({
      isLoading: true,
    });

    const goods = await loadGoodsList<GoodsListItem>();

    this.setState({
      isLoading: false,
      goods: goods.data.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
    });
  };

  loadWithRedColor = async () => {
    this.setState({
      isLoading: true,
    });

    const goods = await loadGoodsList<GoodsListItem>();

    this.setState({
      isLoading: false,
      goods: goods.data.filter(good => good.color === 'red'),
    });
  };

  render() {
    const { goods, isLoading } = this.state;

    return (
      <>
        <div className="App__buttons">
          <button type="button" className="App__button" onClick={this.loadWholeList}>Load all</button>
          <button type="button" className="App__button" onClick={this.loadFiveItems}>Load five</button>
          <button type="button" className="App__button" onClick={this.loadWithRedColor}>Load red</button>
        </div>
        {
          isLoading
            ? (<img className="App__loading" alt="rolling" src="https://s7.gifyu.com/images/rolling.gif" />)
            : <GoodsList goods={goods} />
        }
      </>
    );
  }
}

export default App;

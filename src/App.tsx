import React from 'react';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';
import './App.css';

const URL
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

interface AppState {
  goods: Good[];
}

async function getGoods(url: string): Promise<Good[]> {
  const response = await fetch(url);

  return response.json();
}

export class App extends React.Component<{}, AppState> {
  state = {
    goods: [],
  };

  handleLoadAllButtonClick = async () => {
    const goods = await getGoods(URL);

    this.setState({ goods });
  };

  handleLoad5ButtonClick = async () => {
    const goods = await getGoods(URL);

    this.setState({
      goods: goods.slice(0, 5),
    });
  };

  handleLoadRedButtonClick = async () => {
    const goods = await getGoods(URL);

    this.setState({
      goods: goods.filter((good: Good) => good.color === 'red'),
    });
  };

  render(): JSX.Element {
    const { goods } = this.state;

    return (
      <div className="App">
        <Button text="Load All" handler={this.handleLoadAllButtonClick} />
        <Button text="Load 5" handler={this.handleLoad5ButtonClick} />
        <Button text="Load Red" handler={this.handleLoadRedButtonClick} />
        <GoodsList goods={goods} />
      </div>
    );
  }
}

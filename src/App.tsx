import React from 'react';
import './App.css';
import { getGoods } from './api/api';
import { GoodsList } from './components/GoodList/GoodList';
import { Good } from './interfaces';
import { Buttons } from './components/Buttons/Buttons';

interface State {
  isLoaded: boolean;
  goodsList: Good[];
}

class App extends React.Component<{}, State> {
  state: State = {
    isLoaded: false,
    goodsList: [],
  };

  async componentDidMount() {
    const data = await getGoods<Good>();

    if (data.length !== 0) {
      this.setState({
        isLoaded: true,
        goodsList: data,
      });
    }
  }

  handleFilter = async (title: string) => {
    this.setState({
      isLoaded: false,
    });

    const data = await getGoods<Good>();

    this.setState({
      isLoaded: true,
    });

    switch (title) {
      case 'Load red goods':
        this.setState({
          isLoaded: true,
          goodsList: data.filter(good => good.color === 'red'),
        });
        break;
      case 'Load 5 first goods':
        this.setState({
          isLoaded: true,
          goodsList: data.sort().slice(0, 5),
        });
        break;
      default: this.setState({
        isLoaded: true,
        goodsList: data,
      });
    }
  };

  render() {
    const { isLoaded, goodsList } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        {isLoaded
          ? (
            <>
              <GoodsList goodsList={goodsList} />
              <Buttons onFilter={this.handleFilter} />
            </>
          )
          : <h2> Loading... </h2>}

      </>
    );
  }
}

export default App;

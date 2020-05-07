import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import GoodsList from './components/GoodsList';
import { Good, Button } from './components/Interface';
import { getElement } from './api/getElement';

interface State {
  goods: Good[];
  isLoading: boolean;
}


class App extends React.Component {
  state: State = {
    goods: [],
    isLoading: false,
  };

  loadAll = () => {
    this.setState({ isLoading: true });

    getElement()
      .then(goods => this.setState({ goods }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  loadFirstFive = () => {
    this.setState({ isLoading: true });

    getElement()
      .then(goods => {
        const sortGoods = goods.sort((a: Good, b: Good) => a.name.localeCompare(b.name));

        this.setState({ goods: sortGoods.slice(0, 5) });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  loadRedGoods = () => {
    this.setState({ isLoading: true });

    getElement()
      .then(goods => {
        const filteredGoods = goods.filter((good: Good) => good.color === 'red');

        this.setState({ goods: filteredGoods });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { goods, isLoading } = this.state;

    const buttonsDetails: Button[] = [
      { title: 'Load All goods', clickEvent: this.loadAll },
      { title: 'Load 5 first goods', clickEvent: this.loadFirstFive },
      { title: 'Load red goods', clickEvent: this.loadRedGoods },
    ];

    return (
      <>
        <Buttons
          buttonsDetails={buttonsDetails}
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <GoodsList goods={goods} />
        )}
      </>
    );
  }
}

export default App;

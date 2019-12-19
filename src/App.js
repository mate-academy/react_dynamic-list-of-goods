import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

// eslint-disable-next-line max-len
const BaseUrl = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

class App extends React.Component {
  state = {
    listOfGoods: [],
  }

  getDataFromServer = async() => {
    const response = await fetch(`${BaseUrl}`);

    return response.json();
  };

  loadGoods = async() => {
    this.setState({
      listOfGoods: await this.getDataFromServer(),
    });
  }

  sortByName = async() => {
    const goods = await this.getDataFromServer();

    this.setState({
      listOfGoods: goods.sort((a, b) => (
        a.name.localeCompare(b.name))).splice(0, 5),
    });
  }

  showRedOnly = async() => {
    const goods = await this.getDataFromServer();

    this.setState({
      listOfGoods: goods.filter(good => good.color === 'red'),
    });
  }

  render() {
    return (
      <div className="App" align="center">
        <h1>Goods</h1>
        <button type="button" onClick={this.loadGoods}>Dounload goods</button>

        {this.state.listOfGoods.length !== 0
          && (
            <>
              <button type="button" onClick={this.sortByName}>
                sortByName
              </button>
              <button type="button" onClick={this.showRedOnly}>
                showRedOnly
              </button>
              <TodoList listOfGoods={this.state.listOfGoods} />
            </>
          )
        }
      </div>
    );
  }
}

export default App;

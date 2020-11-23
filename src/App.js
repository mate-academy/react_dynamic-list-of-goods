import React from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.PureComponent {
  state = {
    todos: [],
  };

  render() {
    return (
      <div className="App">
        <h1>React dynamic list of goods</h1>
        <div className="buttons">
          <button
            type="button"
            onClick={() => getAll()
              .then(todos => this.setState({ todos }))}
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={() => get5First()
              .then(todos => this.setState({ todos }))}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => getRedGoods()
              .then(todos => this.setState({ todos }))
            }
          >
            Load red goods
          </button>
        </div>
        <GoodsList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

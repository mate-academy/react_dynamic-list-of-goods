import React from 'react';

import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

import { Tabs } from './components/Tabs';
import { Tab } from './components/Tab';

class App extends React.Component {
  state = {
    data: [],
  }

  tabSelected = (getData) => {
    getData()
      .then(result => this.setState({ data: result }));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <Tabs tabSelected={this.tabSelected} API={goodsAPI} />
        <Tab data={data} />
      </div>
    );
  }
}

export default App;

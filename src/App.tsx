import React from 'react';
import { GoodsList } from './components/GoodsList';

import { getAll, getRedGoods, get5First } from './api/goods';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  fetchGoods = async (fetcher: () => Promise<Good[]>) => {
    const goods: Good[] = await fetcher();

    this.setState({ goods });
  };

  render() {
    const buttons: { [key: string]: () => Promise<Good[]> } = {
      'Load all goods': getAll,
      'Load 5 first goods': get5First,
      'Load red goods': getRedGoods,
    };

    return (
      <div>
        <div>
          {Object.entries(buttons).map(([value, fetcher]) => (
            <input
              key={value}
              type="button"
              value={value}
              onClick={() => this.fetchGoods(fetcher)}
            />
          ))}

          <GoodsList goods={this.state.goods} />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { GoodsList } from './Components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './Components/Button';

type State = {
  visibleGoods: Good[];
  loadingError: string;
};

enum Colors {
  blue = 'is-link',
  red = 'is-danger',
  green = 'is-primary',
}

class App extends React.Component<{}, State> {
  state: State = {
    visibleGoods: [],
    loadingError: '',
  };

  loadGoods = (callback: LoadFunction) => {
    try {
      callback()
        .then((goods: Good[]) => {
          this.setState({ visibleGoods: goods });
        });
    } catch (error) {
      this.setState({ loadingError: 'Ooops, something went wrong' });
    }
  };

  showAll = () => {
    this.loadGoods(getAll);
  };

  showFirstFive = () => {
    this.loadGoods(get5First);
  };

  showRedGoods = () => {
    this.loadGoods(getRedGoods);
  };

  render() {
    const { loadingError, visibleGoods } = this.state;
    return (
      <div className="container section is-medium">
        <div className="columns">
          <div className="column is-half">
            <h1 className="title is-1">Dynamic list of Goods</h1>

            <Button
              buttonType="all"
              callback={this.showAll}
              color={Colors.green}
            />

            <Button
              buttonType="5"
              callback={this.showFirstFive}
              color={Colors.blue}
            />

            <Button
              buttonType="red"
              callback={this.showRedGoods}
              color={Colors.red}
            />
          </div>
          {loadingError || (
            <p>
              {loadingError}
            </p>
          )}

          {visibleGoods.length > 0 && (
            <>
              <div className="column is-one-quarter">
                <GoodsList goodsToShow={visibleGoods} />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;

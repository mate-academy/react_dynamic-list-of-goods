import React from 'react';
import { GoodsList } from '../GoodsList/GoodsList';
import { LoadButtons } from '../LoadButtons/LoadButtons';
import { Good } from '../../interfaces/good';

interface State {
  goods: Good[];
  isLoading: boolean;
  hasError: boolean;
}

export class Goods extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoading: false,
    hasError: false,
  };

  setLoading = (status: boolean) => {
    this.setState({
      isLoading: status,
    });
  };

  setError = (status: boolean) => {
    this.setState({
      hasError: status,
    });
  };

  updateGoodsList = (list: Good[]) => {
    this.setState({
      goods: list,
    });
  };

  render() {
    const { goods, isLoading, hasError } = this.state;

    return (
      <>
        <LoadButtons
          updateList={this.updateGoodsList}
          setLoading={this.setLoading}
          setError={this.setError}
        />
        {
          hasError && <p className="error">Error occurred while loading</p>
        }
        {
          isLoading && <p className="load">Loading...</p>
        }
        {
          !hasError && !isLoading && <GoodsList goods={goods} />
        }
      </>
    );
  }
}

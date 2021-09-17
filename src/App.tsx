import * as React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

type State = {
  typeOfList: 'fullColors' | 'firstFive' | 'redColors' | '';
};

class App extends React.Component<{}, State> {
  state: State = {
    typeOfList: '',
  };

  render() {
    const { typeOfList } = this.state;

    return (
      <div>
        <button
          type="button"
          value={typeOfList}
          onClick={() => (
            this.setState({ typeOfList: 'fullColors' })
          )}
        >
          Full colors
        </button>

        <button
          type="button"
          value={typeOfList}
          onClick={() => (
            this.setState({ typeOfList: 'firstFive' })
          )}
        >
          First five colors by name
        </button>

        <button
          type="button"
          value={typeOfList}
          onClick={() => (
            this.setState({ typeOfList: 'redColors' })
          )}
        >
          First five red colors
        </button>

        <GoodsList type={this.state.typeOfList} />
      </div>
    );
  }
}

export default App;

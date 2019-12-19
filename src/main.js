import React from 'react';
import GetListOfGoods from './GetListOfGoods';
import GoodButtons from './GoodButtons';
import GoodsList from './GoodsList';

class Main extends React.Component {
  state = {
    goods: [],
    buttonHide: [false, false, false],
    errorLoadedGoods: false,
    isLoading: false,
  }

  LoadGoods = () => {
    this.setState({ isLoading: true });

    GetListOfGoods()
      .then((data) => {
        this.setState({
          goods: data,
          buttonHide: [true, false, false],
          isLoading: false,
        });
      })
      .catch(() => this.setState({ errorLoadedGoods: true }));
  }

  Load5FirstGoods = () => {
    this.setState({ isLoading: true });

    GetListOfGoods()
      .then((data) => {
        const sortData = data.sort((a, b) => a.name.localeCompare(b.name));

        sortData.length = 5;
        this.setState({
          goods: sortData,
          buttonHide: [false, true, false],
          isLoading: false,
        });
      })
      .catch(() => this.setState({ errorLoadedGoods: true }));
  }

  LoadRedGoods= () => {
    this.setState({ isLoading: true });

    GetListOfGoods()
      .then((data) => {
        const filteredData = data.filter(good => good.color === 'red');

        this.setState({
          goods: filteredData,
          buttonHide: [false, false, true],
          isLoading: false,
        });
      })
      .catch(() => this.setState({ errorLoadedGoods: true }));
  }

  render() {
    const { errorLoadedGoods, buttonHide, goods } = this.state;
    const { LoadRedGoods, Load5FirstGoods, LoadGoods } = this;

    if (this.state.isLoading === true) {
      return (
        <p className="middle">
          ...LOADING
        </p>
      );
    }

    return (
      <>
        <GoodButtons
          LoadRedGoods={LoadRedGoods}
          Load5FirstGoods={Load5FirstGoods}
          LoadGoods={LoadGoods}
          buttonHide={buttonHide}
        />
        <GoodsList
          errorLoadedGoods={errorLoadedGoods}
          goods={goods}
        />
      </>
    );
  }
}

export default Main;

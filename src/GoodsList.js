import React from 'react';
import cn from 'classnames';
import Filter from './Filter';
import Good from './Good';
import getGoods from './goodsApi';
import './Styles/Main.scss';

class GoodsList extends React.Component {
  state = {
    isShown: true,
    goods: [],
    isLoading: false,
    hasError: false,
  };

  initHandler = () => {
    this.setState(prevState => ({ isShown: !prevState.isShown }));
  };

  loadAllGoods = async() => {
    try {
      this.setState({
        isLoading: true,
      });
      this.setState({
        goods: (await getGoods()),
        isLoading: false,
      });
    } catch {
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }
  }

  loadFilteredGoods = async() => {
    try {
      this.setState({
        isLoading: true,
      });
      this.setState({
        goods: (await getGoods())
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter((good, i) => i < 5),
        isLoading: false,
      });
    } catch {
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }
  }

  loadRedGoods = async() => {
    try {
      this.setState({
        isLoading: true,
      });
      this.setState({
        goods: (await getGoods())
          .filter(good => good.color === 'red'),
        isLoading: false,
      });
    } catch {
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }
  }

  render() {
    const { isShown, goods, isLoading, hasError } = this.state;
    const filterList = [
      {
        title: 'Load Goods', callback: this.loadAllGoods,
      },
      {
        title: 'Load 5 first goods', callback: this.loadFilteredGoods,
      },
      {
        title: 'Load red goods', callback: this.loadRedGoods,
      },
    ];

    return (
      <div className={cn(
        'good-list',
        { blur: isLoading === true || hasError === true },
      )}
      >
        {
          isShown ? (
            <button
              className="buttons__button buttons__button--initial"
              type="button"
              onClick={() => {
                this.initHandler();
              }}
            >
         Start
            </button>
          ) : (
            <>
              <section className="buttons">
                {filterList.map(filter => (
                  <Filter
                    callback={filter.callback}
                    title={filter.title}
                    key={filter.title}
                  />
                ))}
              </section>
              <ul className="goods-list">
                {goods.map(good => (
                  <Good good={good} />
                ))}
              </ul>
              {isLoading && (
                <div className="loading">Loading...</div>
              )}
              {hasError && (
                <div className="error">
                  Error occured, please call your boss or whatever...
                </div>
              )}
            </>
          )
        }
      </div>
    );
  }
}

export default GoodsList;

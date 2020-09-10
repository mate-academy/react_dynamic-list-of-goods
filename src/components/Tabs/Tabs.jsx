import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './Tabs.scss';

export class Tabs extends React.Component {
  state = {
    index: 0,
  }

  render() {
    const { index } = this.state;
    const { tabSelected, API } = this.props;

    return (
      <>
        <nav className="tabs">
          <button
            data-index="1"
            className={ClassNames(
              'tabs__button',
              { ' tabs__button-selected': index === 1 },
            )}
            type="button"
            onClick={(event) => {
              this.setState({
                index: 1,
              });
              tabSelected(API.getAll);
            }}
          >
            Show All
          </button>
          <button
            className={ClassNames(
              'tabs__button',
              { ' tabs__button-selected': index === 2 },
            )}
            type="button"
            onClick={(event) => {
              this.setState({
                index: 2,
              });
              tabSelected(API.get5First);
            }}
          >
            Show All
          </button>
          <button
            className={ClassNames(
              'tabs__button',
              { ' tabs__button-selected': index === 3 },
            )}
            type="button"
            onClick={(event) => {
              this.setState({
                index: 3,
              });
              tabSelected(API.getRedGoods);
            }}
          >
            Show All
          </button>
        </nav>
      </>
    );
  }
}

Tabs.propTypes = {
  tabSelected: PropTypes.func.isRequired,
  API: PropTypes.objectOf(PropTypes.func).isRequired,
};

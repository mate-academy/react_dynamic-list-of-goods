/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import cn from 'classnames';
import PropsTypes from 'prop-types';
import Good from './Good';

class GoodsList extends React.Component {
  state = {
    buttons: [
      {
        name: 'Load goods', hidden: false,
      },
      {
        name: 'Load 5 first goods', hidden: false,
      },
      {
        name: 'Load red goods', hidden: false,
      },
    ],
  }

  hideButton = (button) => {
    const hide = [...this.state.buttons];

    hide[button].hidden = true;

    this.setState({
      buttons: hide,
    });
  }

  render() {
    const { goodsList, handlerGoods } = this.props;

    return (
      <>
        <div className="goods__buttons">
          {this.state.buttons.map((button, index) => (
            <button
              type="button"
              onClick={(event) => {
                handlerGoods(event);
                this.hideButton(index);
              }}
              className={`goods__button
          ${cn({
                buttonHide: button.hidden,
              })}`}
            >
              {button.name}
            </button>
          ))}
        </div>
        {Object.values(goodsList).map(items => (
          <ul className="goods__list">
            <Good items={items} />
          </ul>

        ))}
      </>
    );
  }
}

GoodsList.propTypes = {
  goodsList: PropsTypes.arrayOf.isRequired,
  handlerGoods: PropsTypes.func.isRequired,
};

export default GoodsList;

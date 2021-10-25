import React from 'react';
import './Form.scss';

import { PropsForm, StateForm } from '../../Types';
import { get5First, getAll, getGoodsByColor } from '../../api/goods';

export class Form extends React.Component<PropsForm, StateForm> {
  state: StateForm = {
    selectColor: '0',
    isColorSelect: false,
  };

  colors: string[] = [];

  componentDidMount() {
    getAll().then(goods => {
      this.colors
      = goods
          .map(good => good.color)
          .filter((color, index, array) => (
            array.indexOf(color) === index
          ));
    });
  }

  selectColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectColor: event.currentTarget.value,
      isColorSelect: false,
    });
  };

  clickOnButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    switch (event.currentTarget.id) {
      case ('byColor'):
        this.setState((state) => (
          {
            selectColor: state.selectColor,
            isColorSelect: state.selectColor === '0' && true,
          }
        ));
        this.props.getGoods(getGoodsByColor(this.state.selectColor));

        break;

      case ('top5'):
        this.setState(
          {
            selectColor: '0',
            isColorSelect: false,
          },
        );
        this.props.getGoods(get5First());

        break;

      default:
        this.setState(
          {
            selectColor: '0',
            isColorSelect: false,
          },
        );
        this.props.getGoods(getAll());
    }
  };

  render() {
    const { selectColor, isColorSelect } = this.state;

    return (
      <form
        className="goods__form"
      >
        <button
          onClick={this.clickOnButton}
          className="goods__form--button"
          type="button"
          id="all"
        >
          All goods
        </button>

        <button
          onClick={this.clickOnButton}
          name="top_5_goods"
          className="goods__form--button"
          type="button"
          id="top5"
        >
          Top 5 goods
        </button>

        <button
          onClick={this.clickOnButton}
          name="colored_goods"
          className="goods__form--button"
          type="submit"
          id="byColor"
        >
          Good by color
        </button>

        <select
          className={(isColorSelect) ? 'warning' : ''}
          onChange={this.selectColor}
          name="colors"
          id="colors"
          value={selectColor}
        >
          <option value="0" disabled selected>Select color</option>
          {selectColor && (
            this.colors.map(color => (
              <option
                key={color}
                value={color}
              >
                {color}
              </option>
            ))
          )}
        </select>
      </form>
    );
  }
}

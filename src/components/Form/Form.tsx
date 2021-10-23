import React from 'react';
import './Form.scss';

import { Good } from '../../Types';

type Props = {
  goods: Good[],
  printGoods: (event: React.MouseEvent<HTMLButtonElement>) => void,
  selectedColor: (color: string) => void,
};

type State = {
  selectColor: string,
  isColorSelect: boolean,
};

export class Form extends React.Component<Props, State> {
  state: State = {
    selectColor: '0',
    isColorSelect: false,
  };

  getColorsFromGoods = () => (
    this.props.goods
      .map(good => good.color)
      .filter((color, index, array) => (
        array.indexOf(color) === index
      ))
  );

  selectColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectColor: event.currentTarget.value,
      isColorSelect: false,
    });

    this.props.selectedColor(event.currentTarget.value);
  };

  render() {
    const { selectColor, isColorSelect } = this.state;
    const { printGoods } = this.props;

    return (
      <form
        className="goods__form"
      >
        <button
          onClick={printGoods}
          className="goods__form--button"
          type="button"
          id="all"
        >
          All goods
        </button>

        <button
          onClick={printGoods}
          name="top_5_goods"
          className="goods__form--button"
          type="button"
          id="top5"
        >
          Top 5 goods
        </button>

        <button
          onClick={printGoods}
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
            this.getColorsFromGoods().map(color => (
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

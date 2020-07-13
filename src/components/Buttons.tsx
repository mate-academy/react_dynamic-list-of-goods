import React, { ChangeEventHandler } from 'react';

interface FilterConfigs {
  all: string;
  firstFive: string;
}

export const filterConfigs: FilterConfigs = {
  all: 'Load goods',
  firstFive: 'Load first five goods',
};

type Props = {
  activeLoad: boolean;
  activeLoadFive: boolean;
  activeLoadColor: boolean;
  selectedColor: string;
  handleClick: (arg: string) => void;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

const Buttons: React.FC<Props> = ({
  activeLoad,
  activeLoadFive,
  activeLoadColor,
  selectedColor,
  handleClick,
  onChange,
}) => (
  <div className="goods__inner">
    <button
      className="goods__button"
      type="button"
      onClick={() => handleClick(filterConfigs.all)}
      hidden={activeLoad}
    >
      {filterConfigs.all}
    </button>
    <button
      className="goods__button"
      type="button"
      onClick={() => handleClick(filterConfigs.firstFive)}
      hidden={activeLoadFive}
    >
      {filterConfigs.firstFive}
    </button>
    <select
      className="goods__select"
      name="selectedColor"
      onChange={onChange}
      value={selectedColor}
      hidden={activeLoadColor}
    >
      <option value="">Choose a color</option>
      {['red', 'green', 'blue'].map(color => (
        <option
          className="goods__option"
          key={color}
          value={color}
        >
          {`List of ${color} words`}
        </option>
      ))}
    </select>
  </div>
);

export default Buttons;

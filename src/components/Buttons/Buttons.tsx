import { FC, useState } from 'react';
import classNames from 'classnames';
import { ButtonsEnum } from '../../enums/ButtonsEnum';

type Props = {
  getAllGoods: () => void;
  getFirstFiveGoods: () => void;
  getRedGoods: () => void;
  isLoading: boolean;
};

export const Buttons: FC<Props> = (props) => {
  const {
    getAllGoods,
    getFirstFiveGoods,
    getRedGoods,
    isLoading,
  } = props;

  // eslint-disable-next-line max-len
  const [selectedButton, setSelectedButton] = useState<ButtonsEnum | null>(null);

  const handleLoadGoods = (callback: () => void, currButton: ButtonsEnum) => {
    callback();
    setSelectedButton(currButton);
  };

  return (
    <div className="is-flex is-justify-content-center" style={{ gap: 30 }}>
      <button
        className={classNames('button is-link', {
          'is-loading': isLoading
            && selectedButton === ButtonsEnum.LoadAllGoods,
        })}
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadGoods(getAllGoods, ButtonsEnum.LoadAllGoods)}
        disabled={isLoading}
      >
        {ButtonsEnum.LoadAllGoods}
      </button>

      <button
        className={classNames('button is-warning', {
          'is-loading': isLoading
            && selectedButton === ButtonsEnum.Load5FirstGoods,
        })}
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadGoods(
          getFirstFiveGoods,
          ButtonsEnum.Load5FirstGoods,
        )}
        disabled={isLoading}
      >
        {ButtonsEnum.Load5FirstGoods}
      </button>

      <button
        className={classNames('button is-danger', {
          'is-loading': isLoading
            && selectedButton === ButtonsEnum.LoadRedGoods,
        })}
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadGoods(getRedGoods, ButtonsEnum.LoadRedGoods)}
        disabled={isLoading}
      >
        {ButtonsEnum.LoadRedGoods}
      </button>
    </div>
  );
};

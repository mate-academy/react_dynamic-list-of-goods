import { FC } from 'react';
import 'bulma';

type Props = {
  onGetAll: () => void;
  onGet5First: () => void;
  onGetRedGoods: () => void;
};

export const Buttons: FC<Props> = (props) => {
  const {
    onGetAll,
    onGet5First,
    onGetRedGoods,
  } = props;

  return (
    <div className="
      buttons
      is-flex
      is-flex-direction-row
      is-justify-content-center"
    >
      <button
        type="button"
        className="button is-primary"
        onClick={onGetAll}
      >
        Get all
      </button>

      <button
        type="button"
        className="button is-primary"
        onClick={onGet5First}
      >
        Get 5 first
      </button>

      <button
        type="button"
        className="button is-primary"
        onClick={onGetRedGoods}
      >
        Get red goods
      </button>
    </div>
  );
};

import './Button.scss';
import classNames from 'classnames';

type Props = {
  id: string,
  content: string,
  loadGoods: () => void,
  selected: boolean,
  setSelected: (id: string) => void,
  isLoading: boolean,
};

export const Button: React.FC<Props> = ({
  id,
  content,
  loadGoods,
  setSelected,
  selected,
  isLoading,
}) => {
  const handleClick = () => {
    loadGoods();
    setSelected(id);
  };

  return (
    <button
      type="button"
      data-cy={id}
      onClick={handleClick}
      disabled={isLoading || selected}
      className={classNames('Button', { Button__active: selected })}
    >
      {content}
    </button>
  );
};

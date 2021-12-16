import './GoodsList.scss';
import ClassNames from 'classnames';

type Props = {
  goods: Good[],
  isLoading: boolean,
};

export const GoodsList: React.FC<Props> = ({ goods, isLoading }) => {
  return (
    <div className="goods">
      {isLoading && <p>Loading</p>}

      <ul className="goods__list">
        {goods.map(good => (
          <li key={good.id} className="goods__item">
            <h2
              className={ClassNames(
                'goods__item-title',
                {
                  'goods__item-title--red': good.color === 'red',
                  'goods__item-title--green': good.color === 'green',
                  'goods__item-title--blue': good.color === 'blue',
                },
              )}
            >
              {good.name}
            </h2>
            <p>
              {good.color}
            </p>
          </li>
        ))}
      </ul>
    </div>

  );
};

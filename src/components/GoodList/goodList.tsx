import './goodList.scss';

interface Props {
  goods: Good[]
}

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => {
        return (
          <li
            className="Good__item"
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        );
      })}
    </ul>
  );
};

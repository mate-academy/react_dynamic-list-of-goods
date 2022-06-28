import './GoodsList.scss';

type Props = {
  goods: Good[],
};
export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goodsList">
      {goods.map(g => (
        <li
          className="goodsList__item"
          key={g.id}
          style={{ color: g.color }}
        >
          {g.name}
        </li>
      ))}
    </ul>
  );
};

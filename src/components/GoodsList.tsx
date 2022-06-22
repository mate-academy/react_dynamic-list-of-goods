type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <div className="goodsList">
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
        className="list__item"
      >
        {good.name}
      </li>
    ))}
  </div>
);

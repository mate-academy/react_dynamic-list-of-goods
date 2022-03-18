type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        style={{ color: good.color }}
        key={good.id}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

interface Props {
  goods: Good[],
}

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {`${good.name}`}
      </li>
    ))}
  </ul>
);

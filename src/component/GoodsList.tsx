type Props = {
  goods: Good[],
};

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul className="box is-flex-direction-column pt-10">
    {goods.map(good => (
      <li key={good.id}>
        <span style={{ color: `${good.color}` }}>{good.name}</span>
      </li>
    ))}
  </ul>
);

interface Props {
  goods: Good[]
}

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => {
        return (
          <li
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

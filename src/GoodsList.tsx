interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="mt-5">
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};

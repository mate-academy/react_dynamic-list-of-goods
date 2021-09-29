type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="list-group">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="list-group-item list-group-item-primary"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

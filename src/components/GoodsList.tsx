type Props = {
  goods: Good[]
};

export function GoodsList(props: Props) {
  return (
    <>
      {props.goods.map((good: Good) => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </>
  );
}

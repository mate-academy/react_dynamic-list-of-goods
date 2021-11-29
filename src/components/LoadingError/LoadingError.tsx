type Props = {
  className: string;
};

export const LoadingError: React.FC<Props> = ({ className }) => {
  return (
    <article className={`LoadingError ${className}`}>
      <p>*We couldn&#8217;t fetch data from the server</p>
    </article>
  );
};

import './LoadingError.scss';

type Props = {
  text: string;
};

export const LoadingError: React.FC<Props> = (props) => (
  <div className="error">
    <p className="error-text">
      {props.text}
    </p>
  </div>
);

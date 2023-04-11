import './ErrorMessage.scss';

type Props = {
  text: string;
};

export const ErrorMessage: React.FC<Props> = (props) => (
  <div className="error">
    <p className="error-text">
      {props.text}
    </p>
  </div>
);

import { Button, Spinner } from "react-bootstrap";
import "./LoadingButton.scss";

const LoadingButton = ({ isLoading, type, text, variant, onClick }) => {
  if (isLoading) {
    return (
      <Button variant={variant} disabled>
        <Spinner
          as="span"
          size="sm"
          role="status"
          aria-hidden="true"
          animation="border"
          className="loading-button-spinner"
        />
        {text}
      </Button>
    );
  } else {
    return (
      <Button variant={variant} onClick={onClick} type={type}>
        {text} 
      </Button>
    );
  }
};

export default LoadingButton;

import { ToastContainer, Toast } from "react-bootstrap";
import "./AppToast.scss";

const AppToast = ({ toastMessages, handleToastShow }) => {
  return (
    <ToastContainer className="app-toast">
      {!!toastMessages &&
        toastMessages.map((toast, idx) => (
          <Toast
            key={idx}
            onClose={() => handleToastShow(idx, false)}
            show={toast.show}
            delay={3000}
            autohide
          >
            <Toast.Header
              className={
                toast.status === "Success"
                  ? "app-toast-header__green"
                  : "app-toast-header__red"
              }
            >
              <strong className="me-auto">{toast.status}</strong>
            </Toast.Header>
            <Toast.Body className="app-toast-body">{toast.message}</Toast.Body>
          </Toast>
        ))}
    </ToastContainer>
  );
};

export default AppToast;

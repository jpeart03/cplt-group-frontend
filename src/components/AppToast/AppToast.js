import { ToastContainer, Toast } from "react-bootstrap";
import { useToast } from "../../hooks/AppHooks";

const AppToast = () => {
  const { toastMessages, handleToastShow } = useToast();
  return (
    <ToastContainer position="top-end" className="p-3 mt-5">
      {toastMessages &&
        toastMessages.map((toast, idx) => (
          <Toast
            key={idx}
            onClose={() => handleToastShow(idx, false)}
            show={toast.show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <strong>{toast.status}</strong>
            </Toast.Header>
            <Toast.Body>
              {toast.message} {idx}
            </Toast.Body>
          </Toast>
        ))}
    </ToastContainer>
  );
};

export default AppToast;

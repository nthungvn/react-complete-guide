const Modal = (props) => {
  const cancelHandler = () => {
    props.onCancel();
  };

  const confirmHandler = () => {
    props.onConfirm();
  };

  return (
    <div className="modal">
      <h2>Are you sure to delete?</h2>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;

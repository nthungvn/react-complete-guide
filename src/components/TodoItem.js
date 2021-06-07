import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const TodoItem = (props) => {
  const [modalIsShow, setModalIsShow] = useState(false);

  const deleteHandler = () => {
    setModalIsShow(true);
  };

  const cancelDeleteHandler = () => {
    setModalIsShow(false);
  };

  return (
    <li className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
      {modalIsShow && (
        <section>
          <Backdrop onClick={cancelDeleteHandler} />
          <Modal
            onCancel={cancelDeleteHandler}
            onConfirm={cancelDeleteHandler}
          />
        </section>
      )}
    </li>
  );
};

export default TodoItem;

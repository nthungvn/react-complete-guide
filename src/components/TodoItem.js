const TodoItem = (props) => {
  const deleteHandler = () => {
    console.log('clicked on', props.text);
  };

  return (
    <li className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

const TodoItem = (props) => {
  return (
    <li className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn">DELETE</button>
      </div>
    </li>
  );
};

export default TodoItem;

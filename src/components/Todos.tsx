import { Todo } from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

type TodoProps = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
};

const Todos: React.FC<TodoProps> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          value={item}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

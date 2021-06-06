import { FC } from 'react';
import { Todo } from '../models/todo';
import classes from './TodoItem.module.css';

type TodoItemProps = {
  value: Todo;
  onRemoveTodo: () => void;
};

const TodoItem: FC<TodoItemProps> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.value.text}
    </li>
  );
};

export default TodoItem;

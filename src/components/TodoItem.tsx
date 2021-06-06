import { FC } from 'react';
import { Todo } from '../models/todo';
import classes from './TodoItem.module.css';

const TodoItem: FC<{ value: Todo }> = (props) => {
  return <li className={classes.item}>{props.value.text}</li>;
};

export default TodoItem;

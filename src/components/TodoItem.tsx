import { FC } from 'react';
import { Todo } from '../models/todo';

const TodoItem: FC<{ value: Todo }> = (props) => {
  return <li>{props.value.text}</li>;
};

export default TodoItem;

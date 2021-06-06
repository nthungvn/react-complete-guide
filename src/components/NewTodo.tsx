import { FormEvent, useContext, useRef } from 'react';
import { TodoContext } from '../store/todo-context';
import classes from './NewTodo.module.css';

const NewTodo = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredTodoText = todoInputRef.current!.value.trim();
    if (!enteredTodoText) {
      return;
    }
    todoCtx.addTodo(enteredTodoText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="text">Text</label>
        <input type="text" name="text" id="text" ref={todoInputRef} />
      </div>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

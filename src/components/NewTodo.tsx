import { FC, FormEvent, useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredTodoText = todoInputRef.current!.value.trim();
    if (!enteredTodoText) {
      return;
    }
    props.onAddTodo(enteredTodoText);
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

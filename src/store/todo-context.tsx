import { createContext, FC, useState } from 'react';
import { Todo } from '../models/todo';

type TodoContextValue = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const initialContext: TodoContextValue = {
  todos: [],
  addTodo: (_: string) => {},
  removeTodo: (_: string) => {},
};

export const TodoContext = createContext<TodoContextValue>(initialContext);

const TodoContextProvider: FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 't1', text: 'Learn React' },
    { id: 't2', text: 'Learn Typescript' },
  ]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) =>
      prevTodos.concat({ id: Date.now().toString(), text })
    );
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodoContextValue = {
    todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

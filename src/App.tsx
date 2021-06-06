import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import { Todo } from './models/todo';

const App = () => {
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

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default App;

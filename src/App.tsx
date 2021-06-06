import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import { Todo } from './models/todo';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 't1', text: 'Learn React' },
    { id: 't1', text: 'Learn Typescript' },
  ]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) =>
      prevTodos.concat({ id: Date.now().toString(), text })
    );
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default App;

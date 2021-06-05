import Todos from './components/Todos';
import { Todo } from './models/todo';

const App = () => {
  const todos: Todo[] = [
    { id: 't1', text: 'Learn React' },
    { id: 't1', text: 'Learn Typescript' },
  ];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
};

export default App;

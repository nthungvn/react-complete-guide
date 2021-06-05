import Todos from './components/Todos';

const App = () => {
  const todos: string[] = ['Learn React', 'Learn Typescript'];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
};

export default App;

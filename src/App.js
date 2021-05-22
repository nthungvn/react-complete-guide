import React, { useEffect, useState } from 'react';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const [isLoading, error, fetchTasks] = useHttp();

  useEffect(() => {
    const requestConfig = {
      url: 'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
    };
    const transformTasks = (data) => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(requestConfig, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

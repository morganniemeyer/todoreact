import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { getListTasks } from '../services/tasks.js';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getListTasks();
        setTasks(data);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchTasks();
  }, []);

  return <TaskContext.Provider value={{ tasks, setTasks }}>{children}</TaskContext.Provider>;
};

const useTaskContext = () => {
  const data = useContext(TaskContext);

  if (!data) {
    throw new Error('useTaskContext is missing its other half, the Provider');
  }
  return data;
};

export { useTaskContext, TaskProvider };

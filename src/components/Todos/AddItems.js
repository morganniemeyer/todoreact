import React from 'react';
import { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext.js';
import { createTask } from '../../services/tasks.js';

export default function AddItems() {
  const [description, setDescription] = useState('');
  const { setTasks } = useTaskContext();

  const handleATask = async () => {
    try {
      const task = await createTask(description);
      setTasks((previous) => [...previous, task]);
      setDescription('');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={description}
        placeholder="Add something new!"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button onClick={handleATask}>Add to the list</button>
    </div>
  );
}

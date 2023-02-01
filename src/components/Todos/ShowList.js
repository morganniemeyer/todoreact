import React from 'react';
import { useTaskContext } from '../../context/TaskContext.js';

export default function ShowList() {
  const { tasks } = useTaskContext();

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.description}</div>
      ))}
    </div>
  );
}

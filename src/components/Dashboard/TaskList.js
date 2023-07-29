// components/Dashboard/TaskList.js
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setTasks(response.data.tasks);
      } catch (error) {
        console.error('Fetching tasks error:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
          <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
          {/* Add Edit and Delete buttons here */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;

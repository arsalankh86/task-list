import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';

const TaskList = () => {
  const [tasks, settasks] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchtasks();
  });

  const fetchtasks = async () => {
    try {
      debugger;
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      const response = await axios.get(`https://localhost:7017/api/tasks?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
       
      const newtasks = response.data;

      settasks((prevtasks) => [...prevtasks, ...newtasks]);
      
      setPage(page + 1);

    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (  
    // <InfiniteScroll
    //   dataLength={tasks.length}
    //   next={fetchtasks}
    //   hasMore={hasMore}
    //   loader={<h4>Loading...</h4>}
    //   endMessage={<p>No more tasks to load</p>}
    //   scrollThreshold={0.8} // 80% of the floor
    // >
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.TaskId} task={task} />
        ))}
      </div>
    // </InfiniteScroll>
  );
};

export default TaskList;

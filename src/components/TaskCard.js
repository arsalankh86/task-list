import React from 'react';

const TaskCard = ({ task }) => {
  console.log(task);
  return (
    <div className="card">
      <div className="card-info">
        <h3>{task.title}</h3>
        <p>Title: {task.title}</p>
        <p>Description: {task.description}</p>
        <p>DueDate: {task.dueDate}</p>
        <p>Priority: {task.priority}</p>
      </div>
    </div>
  );
};

export default TaskCard;

import React, { useState } from "react";

export const Tasks = ({ tasks }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const onChangeInput = (e) => {};
  const onDelete = (e) => {};
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  }

  console.log("tasks length:::", tasks.length);
  console.log(isChecked);
  if (tasks.length === 0) return null;

  const TaskRow = (task, index) => {
    return (
      <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
        <td>{index + 1}</td>
        <td>
          {isUpdated ? (
            <input
              type="text"
              id="tasknameupdate"
              value={task.taskName}
              onChange={(e) => onChangeInput}
            />
          ) : (
            task.taskName
          )}
        </td>
        <td>
          {isUpdated ? (
            <input
              type="text"
              id="taskdescupdate"
              value={task.taskDesc}
              onChange={(e) => onChangeInput}
            />
          ) : (
            task.taskDesc
          )}
        </td>
        <td>
          <input type="checkbox" onChange={(e) => handleChange(e)}/>
        </td>
        <td>
          {isUpdated ? (
            <>
              <button onClick={(e) => setIsUpdated(false)} className="btn btn-primary button-layout">Update</button>
              <button onClick={(e) => setIsUpdated(false)} className="btn btn-secondary">Cancel</button>
            </>
          ) : (
            <>
              <button onClick={(e) => setIsUpdated(true)} className="btn btn-primary button-layout">Edit</button>
              <button onClick={(e) => onDelete} className="btn btn-danger">Delete</button>
            </>
          )}
        </td>
      </tr>
    );
  };

  const taskTable = tasks.map((task, index) => TaskRow(task, index));

  return (
    <div className="container">
      <h2>Tasks</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Task Description</th>
            <th>Completed</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{taskTable}</tbody>
      </table>
    </div>
  );
};

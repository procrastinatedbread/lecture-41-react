import React from "react";

const taskList = [
  {
    name: "Cricket",
    isCompleted: true,
  },
  {
    name: "Development",
    isCompleted: false,
  },
  {
    name: "Gym",
    isCompleted: true,
  },
  {
    name: "Netflix",
    isCompleted: true,
  },
];

const Todolist = () => {
  return (
    <ul>
      {taskList.map((task) => {
        return (
          <li>
            {task.name}
            <input type="checkbox" defaultChecked={task.isCompleted}></input>
          </li>
        );
      })}
    </ul>
  );
};

export default Todolist;

import React, { useEffect, useState } from "react";

export const TodoList = ({ tasks, setTask }) => {
  const filtredTask = [...tasks];
  const [taskslist,setTasksList]=useState([...tasks])
  useEffect(() => {
    setTasksList(filtredTask)
  }, [tasks])
  const completeTask = (task) => {
    const temp = [...tasks];
    const index = temp.findIndex((q) => q.id == task.id);
    temp[index].isComplete = !temp[index].isComplete;
    setTask([...temp]);
  };

  const deleteTask = (task) => {
    setTimeout(function () {
      const temp = [...tasks];
      const index = temp.findIndex((q) => q.id == task.id);
      temp[index].deleted = true;
      const items = temp.filter((q) => q.id !== task.id);
      console.log("remove");
      console.log(items);
      setTask(items);


    }, 500);
  };

  const doneFilter =()=>{
    const items = filtredTask.filter((q) => q.isComplete == true);
   setTasksList(items)
  }

  const UnDoneFilter =()=>{
    const items = filtredTask.filter((q) => q.isComplete == false);
   setTasksList(items)
  }

  const allTasks =()=>{
   setTasksList([...tasks])
  }
  return (
    <ul>
            <div className="divContainer">
              <div onClick={allTasks}>All</div>
              <div onClick={doneFilter}>Done</div>
              <div onClick={UnDoneFilter}>UnDone</div>
            </div>
      {taskslist.map((task, index) => (
        <div>
            
          <li className={task.isComplete ? "complete" : ""} key={index}>
            {task.title}
            <span>
              <i
                className="fa fa-trash remove"
                onClick={() => deleteTask(task)}
              ></i>
              <i
                className="fa fa-check check"
                onClick={() => completeTask(task)}
              ></i>
            </span>
          </li>
        </div>
      ))}
    </ul>
  );
};

import React, { useEffect, useRef, useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import ReactiveButton from 'reactive-button';
import { TodoList } from "../TodoList";
import { v4 as uuidv4 } from "uuid";

//! استفاده از لوکال استورج

export const CardContainer = () => {
  // !Add Task
  
  
  const [tasks, setTask] = useState([]);
  const taskInputRef = useRef();
  useEffect(() => {
    taskInputRef.current.focus();
    
  }, [])
  const addTask = () => {
    setTimeout(function () {
      let value = taskInputRef.current.value;

      if (taskInputRef.current.value !== "") {
        let temp = [
          ...tasks,
          { id: uuidv4(), title: value, isComplete: false },
        ];
        console.log(temp);
        setTask([...temp]);
        taskInputRef.current.value = "";
      }
    }, 100);
  };
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const enterAdd = (e) => {
    if (e.charCode === 13) {
      addTask();     
    }
  };

  //* btn and tail....
  const [state, setState] = useState("idle");
  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 300);
   
  };
  return (
    <Card className="bg-color">
      <div className="header-bg" style={{ fontFamily: "Roboto !important" }}>
        <h1 className="title">TODO LIST</h1>
        <h3 className="sub-title">write your task to dont forget</h3>
      </div>
      <CardBody className="card-box">
        <div>
          <input
            className="inputi"
            ref={taskInputRef}
            type="text"
            
            onKeyPress={enterAdd}
            autofocus
          />

          <ReactiveButton
            buttonState={state}
            onClick={()=>{
              onClickHandler();
              addTask();
            }
          }
            color={"yellow"}
            idleText={"Add👍"}
            loadingText={"Loading"}
            successText={"Success✅"}
            errorText={"Error❌"}
            type={"button"}
            className={"class1 class2"}
            style={{ borderRadius: "5px" }}
            outline={false}
            shadow={true}
            rounded={false}
            size={"small"}
            block={false}
            messageDuration={1000}
            disabled={false}
            buttonRef={null}
            width={null}
            height={null}
            animation={true}
            
          />
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex justify-left list">
          <TodoList tasks={tasks} setTask={setTask} />
        </div>
      </CardFooter>

      
    </Card>
  );
};

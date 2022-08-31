import { MouseEventHandler, useState } from "react";
import "./ToDoItem.css";
import { ToDoItemType } from "../Types";

const todoTest: ToDoItemType = {
  title: "tarea",
  description: "para hacer",
  date: "hoy",
  completed: false,
};
const closeTodo: MouseEventHandler<HTMLButtonElement> = () => {};
const ToDoItem = () => {
  const [ToDoItemType, setToDoItemType] = useState({
    title: "",
    description: "",
    date: "",
    completed: false,
  });
  return (
    <>
      <div className="todo-container">
        <button onClick={closeTodo} className="todo-closer">
          x
        </button>
        <h2 className="todo-title">{todoTest.title}</h2>
        <p className="todo-description">{todoTest.description}</p>
        <p className="todo-limitDate">{todoTest.date}</p>
      </div>
    </>
  );
};

export default ToDoItem;

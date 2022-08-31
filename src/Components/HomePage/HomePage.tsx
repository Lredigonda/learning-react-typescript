import "./HomePage.css";
import { ToDoItemType } from "../Types";
import { useState } from "react";

const HomePage = () => {
  return (
    <>
      <div className="todo-homepage">
        <h1>Homeworks To Do</h1>
        <p>this app helps you</p>
        <div className="todo-item_container"></div>
      </div>
    </>
  );
};
export default HomePage;

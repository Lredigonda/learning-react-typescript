import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./Components/HomePage/HomePage";
import reportWebVitals from "./reportWebVitals";
import ToDoItem from "./Components/ToDoItem/ToDoItem";
import ToDoForm from "./Components/ToDoForm/ToDoForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomePage />
    <ToDoForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

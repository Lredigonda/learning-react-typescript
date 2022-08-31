import { useState } from "react";
import{ToDoItemType} from '../Types'
import "./ToDoForm.css";

const ToDoForm = () => {
  
  const formSubmit = () => {}
  
  const [inputValues , setInputValues] = useState<ToDoItemType>({
    title: '',
    description: '',
    date: '',
    completed: false
  })
  
  const formChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    setInputValues({
      ...inputValues,
      [e.target.name] : e.target.value
    })
  }
  
  
  
  
  
  
  return (
    <div className="form-container">
      <input onChange={formChange}name="title" value={inputValues.title}type="text" placeholder="Title"></input>
      <input onChange={formChange} name="description" value={inputValues.description}type="text" placeholder="To Do Desciption"></input>
      <input onChange={formChange} name="date" value={inputValues.date}type="date" placeholder="Date of End"></input>
      <input name="submit" type="submit" onSubmit={formSubmit}></input>
    </div>
  );
};
export default ToDoForm;

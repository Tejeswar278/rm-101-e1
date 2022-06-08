import React, { useState } from "react";
import styles from "./addTask.module.css";
import { useDispatch } from "react-redux";
import {v4 as uuidv4} from "uuid";
import { addTaskData } from "../../redux/action";


const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const dispatch = useDispatch();
  const [count, setCount] = useState({id: uuidv4(),text:"",done:false,count:1})
  function handler (e) {
    const {name, value} =  e.target;
    setCount({...count,[name]:value,id:uuidv4()})
  }
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={handler} name="text" />
      <button data-testid="add-task-button" onClick={() => {
        if(count.text == ""){
          return;
        }
        dispatch(addTaskData(count))
      }}>Add Todo</button>
    </div>
  );
};

export default AddTask;

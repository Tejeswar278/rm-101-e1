import React from "react";
import styles from "./task.module.css";
import { useDispatch } from "react-redux";
import { addTaskData1, deleteTask } from "../../redux/action";
import Counter from "../Counter/Counter";



const Task = ({props}) => {
  // NOTE: do not delete `data-testid` key value pair

  const dispatch = useDispatch();

  const {id, text, done, count} = props;

  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" checked={done} onClick={() => {dispatch(addTaskData1([false,id]))}} />
      <div data-testid="task-text" className={done?styles.textLine:null}>{text}</div>
      {/* Counter here */}
      <button data-testid="task-remove-button" onClick={()=> {
        dispatch(deleteTask(id))
      }}>delete</button>
    </li>
  );
};

export default Task;

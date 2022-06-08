import React, {useEffect} from "react";
import styles from "./tasks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/action";
import data from "../../data/tasks.json";
import { store } from "../../redux/store";
import Task from "../Task/Task";


const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTask(data))
  },[])

  const todoData = useSelector((store) => store.todo)

  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
      {todoData.map((ele, i) => (
          <Task props={ele} key={ele.id} />
        ))}
      </ul>
      {data.length == 0 ? (
        <div data-testid="tasks-empty" className={styles.empty}>
        {/**/}
        Please add something  
      </div>
      ) : null}
    </>
  );
};

export default Tasks;

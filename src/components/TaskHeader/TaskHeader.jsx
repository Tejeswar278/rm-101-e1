import React from "react";
import styles from "./taskHeader.module.css";
import { useSelector } from "react-redux";
import { Store } from "redux";

const TaskHeader = () => {
  // sample values to be replaced
  const todoList  = useSelector((store) => store.todo);
  let valu = todoList.filter((ele) => ele.done == false);
  let totalTask = todoList.length || 0;
  let unCompletedTask = valu.length || 0;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      You have
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      of
      <b data-testid="header-total-task">{totalTask}</b>
      tasks remaining
    </div>
  );
};

export default TaskHeader;

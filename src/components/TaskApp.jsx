import React from "react";
import AddTask from "./AddTask/AddTask";
import TaskHeader from "./TaskHeader/TaskHeader"
import Tasks from "./Tasks/Tasks";

import styles from "./taskApp.module.css";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      {/* Add Task */}
      <AddTask/>
      {/* Tasks */}
      <Tasks/>
    </div>
  );
};

export default TaskApp;

import React, { useState } from "react";
import TaskApp from "./components/TaskApp";
import "./App.css"
function App() {
  // const [count,setcount] = useState(0)
  // const [count1,setcount1] = useState(0)
  // const [task, setTask] = useState("")
  // const [tasks, setTasks] = useState([])
  // const handleSubmit = () => {
  //   setcount1()
  //   setTasks([
  //       ...tasks,task
  //   ])
// }
  return <div className="App">
    {/* <div>
      <div>Todo List</div>
      <div>you have {count} out of {count1} tasks remaining</div>
    </div>
    <div className="addTask">
      <div><input placeholder="Add task" value={task || ""} type="text" onChange={(e) => setTask(e.target.value)}/></div>
      <div><button onClick={handleSubmit} className="upgrade-btn2 p-btn">+</button></div>
    </div>
    <div>
      {tasks.map((e,i) => (
                            <p key={i}> {e} </p>
                        ))}
    </div> */}
    <TaskApp/>
  </div>;
}

export default App;

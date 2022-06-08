export const ADDTASK = "ADDTASK";
export const DELETETASK = "DELETETASK";
export const ADDTASKDATA = "ADDTASKDATA";
export const ADDTASKDATA1 = "ADDTASKDATA1";


export const addTask = (val) => {
  return { type: ADDTASK, payload: val };
};
export const deleteTask = (val) => {
  return { type: DELETETASK, payload: val };
};
export const addTaskData = (val) => {
  return { type: ADDTASKDATA, payload: val };
};
export const addTaskData1 = (val) => {
  return { type: ADDTASKDATA1, payload: val };
};
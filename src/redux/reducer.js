import { ADDTASK, ADDTASKDATA, ADDTASKDATA1, DELETETASK} from "./action";

const init = {
  todo: [],
};

export const Reducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return { ...store, todo: [...payload] };
    case ADDTASKDATA:
      return { ...store, todo: [...store.todo, payload] };
    case ADDTASKDATA1:
      return {
        ...store,
        todo: [...store.todo].map((ele) => {
          if (ele.id == payload[1]) {
            ele.done = !ele.done;
            //   console.log(ele.id)
          }
          return ele;
        }),
      };
    case DELETETASK:
      return {
        ...store,
        todo: [...store.todo].filter((ele) => ele.id != payload),
      };
    default:
      return store;
  }
};
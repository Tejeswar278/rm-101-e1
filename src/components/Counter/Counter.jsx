import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({props}) => {
  // sample value to be replaced
  let count = 0;
  // NOTE: do not delete `data-testid` key value pair
  const [count1, setCount1] = useState(props.count)
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={() => {
        setCount1((p) => p+1)
      }} >+</button>
      <span data-testid="task-counter-value">{count1}</span>
      <button data-testid="task-counter-decrement-button" onClick={() => {
        if(count1 == 0){
          return;
        }
        setCount1((p) => p - 1)
      }} >-</button>
    </div>
  );
};

export default Counter;

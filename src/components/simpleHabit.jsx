import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = props => {
  //function 컴포넌트는 props,state 가 변경이 되면 함수전체가 반복이된다.
  // state = {
  //   count: 0,
  // };
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });
  useEffect(() => {
    console.log(`simpleHait.jsxxxxx`);
  }, []);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
}

export default SimpleHabit;

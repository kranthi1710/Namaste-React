import { useState } from "react";

const User = ({ name }) => {
  //Behind the scenes, React stores all state variables in one Object just like class based
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  //Above we have done Destructure on the fly for props
  //Functional component is a function that return a piece of JSX

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("namaste React");
    }, 1000);
    //We will do cleanup
    return () => {
      //called when unmounting the component
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, [count]);
  return (
    <div className="user-card">
      <h1>Count - {count}</h1>
      <h1>Count2 - {count2}</h1>
      <h2>Name:{name}</h2>
      <h2>LOcation:Hyderabad</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment functional button
      </button>
    </div>
  );
};

export default User;

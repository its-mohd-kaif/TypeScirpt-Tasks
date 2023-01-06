import { useState } from "react";
// Define Type
type random = number;
function Task2() {
  const [num, setNum] = useState<random | 0>(10);
  // Random Handler
  const randomHandler = () => {
    let random = Math.floor(Math.random() * 10 + 1);
    setNum(random);
  };
  // Throw Error
  if (num < 5) {
    throw new Error("Something Went Wrong");
  }

  return (
    <div>
      <h1>Random number generation</h1>
      <h3>{num}</h3>
      <button className="button" onClick={randomHandler}>
        Generate Number
      </button>
      <hr></hr>
    </div>
  );
}

export default Task2;

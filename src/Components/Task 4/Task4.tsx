import React from "react";
import ChildTask4Comp from "./ChildTask4Comp";
const data = require("./Data.json");
function Task4() {
  return (
    <div>
      <ChildTask4Comp data={data} />
    </div>
  );
}

export default Task4;

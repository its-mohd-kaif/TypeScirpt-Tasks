import React from "react";
// Define Type
type Task3Props = {
  name: string;
  num: number;
  isLoggedin: boolean;
};
function ChildComponent(props: Task3Props) {
  return (
    <div>
      {props.isLoggedin ? (
        <>
          <h3>{props.name}</h3>
          <h3>{props.num}</h3>
        </>
      ) : null}
      <hr></hr>
    </div>
  );
}

export default ChildComponent;

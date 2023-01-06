import React from "react";

function Error() {
  // Fall Back UI Component
  const backHandler = () => {
    window.location.reload();
  };
  return (
    <div role="alert">
      <h1 style={{color:"red"}}>Something went wrong :/</h1>
      <button onClick={backHandler} className="button">
        Back
      </button>
      <hr></hr>
    </div>
  );
}

export default Error;

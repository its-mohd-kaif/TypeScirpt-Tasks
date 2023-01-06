import React from "react";
import "./App.css";
import Task2 from "./Components/Task 2/Task2";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Components/Task 2/Error";
import Task3 from "./Components/Task 3/Task3";
import Task4 from "./Components/Task 4/Task4";
function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Error}>
        <Task2 />
      </ErrorBoundary>
      <Task3 />
      <Task4 />
    </div>
  );
}

export default App;

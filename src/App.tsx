import { Fragment } from "react";
import Background from "./components/background";
import AppBar from "./components/appBar";

function App() {
  return (
    <Fragment>
      <div className="lg:grid lg:grid-cols-3 lg:grid-rows-4 w-screen h-screen">
        <AppBar />
        <Background />
      </div>
    </Fragment>
  );
}

export default App;

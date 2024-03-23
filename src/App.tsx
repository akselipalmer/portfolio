import { Outlet } from "react-router-dom";
import AppBar from "./components/appBar";

function App() {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:grid-rows-4 w-screen lg:h-screen">
      <AppBar />
      <Outlet />
    </div>
  );
}

export default App;

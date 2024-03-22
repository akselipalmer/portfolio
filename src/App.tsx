import { Fragment } from "react";
import Background from "./components/background";

import AppBar from "./components/appBar";
import MainText from "./components/mainText";
import { motion } from "framer-motion";

function App() {
  return (
    <Fragment>
      <motion.div className="absolute w-full h-screen ">
        <AppBar />
        <MainText />
        <Background />
      </motion.div>
    </Fragment>
  );
}

export default App;

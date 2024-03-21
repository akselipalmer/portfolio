import { Fragment } from "react";
import Background from "./components/background";
import Frame from "./components/frame";
import AppBar from "./components/appBar";
import MainText from "./components/mainText";
import CarouselPagination from "./components/carouselPagination";

function App() {
  return (
    <Fragment>
      <div className="absolute w-full h-full">
        <Background />
        <Frame>
          <AppBar />
          <MainText />
          <CarouselPagination />
        </Frame>
      </div>
    </Fragment>
  );
}

export default App;

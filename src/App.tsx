import { Fragment } from "react";
import Background from "./components/background";
import Frame from "./components/frame";
import AppBar from "./components/appBar";
import MainText from "./components/mainText";
import CarouselPagination from "./components/carouselPagination";
import { useAnimate } from "framer-motion";

function App() {
  const [backgroundLeft, animateBackgroundLeft] = useAnimate();

  const handleChange = (newVal: number) => {
    const opVal = newVal === 1 ? 0.2 : newVal === 2 ? 0.5 : 1;

    animateBackgroundLeft(backgroundLeft.current, { opacity: opVal });
    return;
  };

  return (
    <Fragment>
      <div className="absolute w-full h-full">
        <Background backgroundLeft={backgroundLeft} />
        <Frame>
          <AppBar />
          <MainText />
          <CarouselPagination handleChange={handleChange} />
        </Frame>
      </div>
    </Fragment>
  );
}

export default App;

import { Fragment } from "react/jsx-runtime";
// import { useAnimate } from "framer-motion";
// import CarouselPagination from "./carouselPagination";
// import LeftDragDiv from "./leftDragDiv";
import UserTypeCards from "./userTypeCards";
// const colors = ["rgb(249, 115, 22)", "rgb(168, 85, 247)", "rgb(250, 204, 21)"];

export type leftBoxConstraintsProps = {
  leftBoxConstraints: React.MutableRefObject<null>;
};

export default function Background(): JSX.Element {
  // const [backgroundLeft, animateBackgroundLeft] = useAnimate();

  // const handleChange = (newVal: number) => {
  //   const opVal = newVal === 1 ? 0.2 : newVal === 2 ? 0.5 : 1;
  //   animateBackgroundLeft(backgroundLeft.current, { opacity: opVal });
  //   return;
  // };

  return (
    <Fragment>
      <div
        // ref={backgroundLeft}
        className="w-1/3 bg-yellow-300 absolute left-0 top-0 bottom-0 z-0 "
      ></div>
      <div className="w-2/3 bg-orange-400 absolute right-0 top-0 bottom-0 z-0"></div>
      {/* <CarouselPagination handleChange={handleChange} /> */}
      <UserTypeCards />
    </Fragment>
  );
}

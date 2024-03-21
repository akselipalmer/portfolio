import { Fragment } from "react/jsx-runtime";
import { AnimationScope } from "framer-motion";
type BackgroundProps = {
  backgroundLeft: AnimationScope;
};

export default function Background({ backgroundLeft }: BackgroundProps) {
  return (
    <Fragment>
      <div
        ref={backgroundLeft}
        className="w-1/3 bg-yellow-400 absolute left-0 top-0 bottom-0 -z-50"
      ></div>
      <div className="w-2/3 bg-orange-500 absolute right-0 top-0 bottom-0 -z-50"></div>
    </Fragment>
  );
}

import { Fragment } from "react/jsx-runtime";
import UserTypeCards from "./userTypeCards";
import MainText from "./mainText";

export type leftBoxConstraintsProps = {
  leftBoxConstraints: React.MutableRefObject<null>;
};

export default function Background(): JSX.Element {
  return (
    <Fragment>
      <div className="bg-cyan-600 lg:bg-yellow-300 lg:row-span-4 lg:col-span-1" />
      <div className="bg-pink-600 lg:bg-orange-400 lg:row-span-4 lg:col-span-2 lg:grid lg:grid-rows-12 lg:grid-cols-6 px-4 md:px-8 lg:px-0 pt-20 lg:pt-0 h-full">
        <MainText />
        <UserTypeCards />
      </div>
    </Fragment>
  );
}

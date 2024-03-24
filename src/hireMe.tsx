import Header from "./components/header";
import JobHistory from "./components/jobHistory";
import MainText from "./components/mainText";
import { Fragment } from "react/jsx-runtime";
import AppBar from "./components/appBar";

export default function HireMe(): JSX.Element {
  return (
    <Fragment>
      <AppBar />
      <div className="h-full w-full px-5 lg:px-20 py-5 ">
        <MainText />
        <Header />
        <JobHistory />
      </div>
    </Fragment>
  );
}

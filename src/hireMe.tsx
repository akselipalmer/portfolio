import Header from "./components/header";
import JobHistory from "./components/jobHistory";
import MainText from "./components/mainText";
import { Fragment } from "react/jsx-runtime";
import AppBar from "./components/appBar";
import Education from "./components/education";

export default function HireMe(): JSX.Element {
  return (
    <Fragment>
      <AppBar />
      <div className="h-full w-full px-5 lg:px-20 py-5 ">
        <MainText />
        <div className="flex  flex-col gap-3 mt-6">
          <Header />
          <JobHistory />
          <Education />
        </div>
      </div>
    </Fragment>
  );
}

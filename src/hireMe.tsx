import Header from "./components/header";
import JobHistory from "./components/jobHistory";

export default function HireMe(): JSX.Element {
  return (
    <div className="h-screen w-screen px-20  ">
      <Header />
      <JobHistory />
    </div>
  );
}

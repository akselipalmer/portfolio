import Header from "./components/header";
import JobHistory from "./components/jobHistory";
import MainText from "./components/mainText";
import Education from "./components/education";
import Links from "./components/links";
import Footer from "./components/footer";

export default function HireMe(): JSX.Element {
  return (
    <div>
      <div className="h-full w-full px-5 lg:px-20 py-5">
        <MainText />
        <div className="flex flex-col gap-3 mt-6">
          <Links />
          <Header />
          <JobHistory />
          <Education />
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { Fragment } from "react/jsx-runtime";

export default function Background() {
  return (
    <Fragment>
      <div className="w-1/3 bg-yellow-400 absolute left-0 top-0 bottom-0 -z-50"></div>
      <div className="w-2/3 bg-blue-400 absolute right-0 top-0 bottom-0 -z-50"></div>
    </Fragment>
  );
}

import { BsPersonAdd } from "react-icons/bs";
import TypeCard, { TypeCardProps } from "./typeCard";
import { FaPeopleGroup } from "react-icons/fa6";

const typeButtons: TypeCardProps[] = [
  {
    title: "Looking to hire?",
    description: "You are a recruiter looking to hire a developer",
    icon: (props) => <BsPersonAdd className={props} />,
    handleClick: () => {},
  },
  {
    title: "Need help building a project?",
    description:
      "You are a building (mobile or web app) and looking to hire a team",
    icon: (props) => <FaPeopleGroup className={props} />,
    handleClick: () => {},
  },
];

export default function UserTypeCards(): JSX.Element {
  // -translate-x-1/3
  // lg:translate-x-0
  return (
    <div className="flex flex-col gap-5 lg:col-start-2 lg:col-end-6 lg:row-start-8 lg:row-end-12">
      {typeButtons.map((cardValues) => (
        <TypeCard {...cardValues} key={cardValues.title} />
      ))}
    </div>
  );
}

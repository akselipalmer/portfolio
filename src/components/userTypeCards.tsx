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
  return (
    <div className="absolute left-1/2 top-1/4 w-1/4 flex flex-col gap-5   ">
      {typeButtons.map((cardValues) => (
        <TypeCard {...cardValues} />
      ))}
    </div>
  );
}

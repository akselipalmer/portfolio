import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";
type JobCardProps = {
  currentCard: number | string;
};

type card = {
  companyName: string;
  jobTitle: string;
  texts: string[];
  date?: string;
  skills?: string[];
};

const cards: card[] = [
  {
    companyName: "Historic Data",
    jobTitle: "Frontend Developer",
    texts: [
      "Brought idea to production in 13 months",
      "Decreased lead time for changes from (4 weeks to less than 1 hour)",
      "Increased Deployment Frequency from (1 deployment a month) to (multiple deploys a day)",
      "Time to restore a service decreased from (2 weeks to less than 1hour)",
    ],
    skills: ["React", "TypeScript", "Testing"],
    date: "February 2023 - Present",
  },
  {
    companyName: "Ox Construction LLc",
    jobTitle: "Subcontractor",
    texts: [
      "Became strongly proficient in multiple trades including (electrical, roofing, exteriors, and home improvement)",
    ],
    skills: ["Constant Learning", "Continuous Improvement"],
    date: "August 2020 - May 2021",
  },
  {
    companyName: "Olive Garden & Sunset Grill",
    jobTitle: "Server",
    texts: [
      "Developed my skills by working closely with team members in a highly collaborative environment",
    ],
    skills: ["Teamwork", "Collaboration"],
    date: "April 2018 - February 2023",
  },
];

const getValueAsNumber = (value: string | number | undefined) => {
  if (value !== undefined) {
    if (typeof value === "string") {
      if (parseInt(value) !== undefined) {
        return parseInt(value);
      } else {
        return 1;
      }
    } else if (typeof value === "number") {
      return value;
    }
  }
  return 1;
};

export default function JobCard({ currentCard }: JobCardProps): JSX.Element {
  const value =
    currentCard === undefined
      ? cards[0]
      : cards[getValueAsNumber(currentCard) - 1];

  const { companyName, jobTitle, texts, skills, date } = value;

  return (
    <Card className="mt-2  " isBlurred={true}>
      <CardHeader>
        <div className="flex flex-col">
          <p className="text-xl ">{jobTitle}</p>
          <p className="text-medium tracking-tight text-default-600 font-semibold">
            {companyName}
            <span className=" text-sm text-default-500"> - {date}</span>
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex flex-col flex-wrap gap-2">
          {texts.map((text) => (
            <p key={text} className="text-md font-semibold">
              {text}
            </p>
          ))}
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex gap-2  flex-wrap">
          {skills?.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

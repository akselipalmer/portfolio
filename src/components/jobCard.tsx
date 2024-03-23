import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";

const texts = [
  "- Brought idea to production in 13 months.",
  "- Decreased lead time for changes from (4 weeks to less than 1 hour).",
  "- Increased Deployment Frequency from (1 deployment a month) to (multiple deploys a day).",
  "-Time to restore a service decreased from (2 weeks to less than 1hour).",
];

export default function JobCard(): JSX.Element {
  return (
    <Card className="mt-2  " isBlurred={true}>
      <CardHeader>
        <div className="flex flex-col">
          <p className="text-xl ">Frontend Developer</p>
          <p className="text-medium tracking-tight text-default-500  ">
            Historic Data
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        {texts.map((text) => (
          <p key={text} className="text-md">
            {text}
          </p>
        ))}
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex gap-2 ">
          <Chip>React</Chip>
          <Chip>TypeScript</Chip>
        </div>
      </CardFooter>
    </Card>
  );
}

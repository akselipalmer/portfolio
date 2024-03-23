import { Card, CardBody } from "@nextui-org/react";
import { Link } from "react-router-dom";

export type TypeCardProps = {
  title: string;
  description: string;
  icon: (props: string) => JSX.Element;
  handleClick: React.MouseEventHandler<HTMLDivElement> | undefined;
};

export default function TypeCard({
  title,
  description,
  icon,
  handleClick,
}: TypeCardProps): JSX.Element {
  return (
    <Card
      className="bg-transparent w-full lg:border-r-3 border-white text-white"
      isPressable={true}
      onClick={handleClick}
      radius="none"
      as={Link}
      to="../hireme"
    >
      <CardBody className="flex flex-row items-center justify-between">
        <div>
          <p className="text-xl font-bold ">{title}</p>
          <p className="text-lg ">{description}</p>
        </div>
        <div className="min-w-8 ml-2">{icon("text-2xl")}</div>
      </CardBody>
    </Card>
  );
}

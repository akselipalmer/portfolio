import { Card, CardBody } from "@nextui-org/react";

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
      className="bg-transparent w-full border-white text-white"
      isPressable={true}
      onClick={handleClick}
      key={title}
      // shadow="none"
    >
      <CardBody className="flex flex-row items-center justify-between">
        <div>
          <p className="text-xl font-bold ">{title}</p>
          <p className="text-lg ">{description}</p>
        </div>
        {icon("text-2xl ")}
      </CardBody>
    </Card>
  );
}

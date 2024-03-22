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
      className="bg-transparent border-4 w-full"
      isPressable={true}
      onClick={handleClick}
    >
      <CardBody className="flex flex-row items-center justify-between text-white">
        <div>
          <p className="text-xl font-bold ">{title}</p>
          <p className="text-lg ">{description}</p>
        </div>
        {icon("text-2xl ")}
      </CardBody>
    </Card>
  );
}

import { Card, CardBody } from "@nextui-org/react";
import Links from "./links";

export default function Footer() {
  return (
    <Card radius="none">
      <CardBody>
        <div className="flex items-center justify-center  ">
          <Links />
        </div>
      </CardBody>
    </Card>
  );
}

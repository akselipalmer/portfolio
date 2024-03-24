import { Avatar, Card, CardBody, Image } from "@nextui-org/react";

export default function Header(): JSX.Element {
  return (
    <Card>
      <CardBody className="flex flex-col lg:flex-row items-center justify-start">
        <div>
          <Avatar
            src="https://avatars.githubusercontent.com/u/16160255?v=4"
            className="text-4xl w-44  h-44"
          />
        </div>
        <div className="flex items-center ml-auto mr-auto mt-5 lg:mt-0">
          <Image
            alt="language Icons (react,firebase,css,html,js,ts,github,git,mui,tailwind,vite,vscode)"
            width={500}
            className="mx-auto my-auto"
            src="https://skillicons.dev/icons?i=react,firebase,css,html,js,ts,github,git,mui,tailwind,vite,vscode&theme=light&perline=6"
          />
        </div>
      </CardBody>
    </Card>
  );
}

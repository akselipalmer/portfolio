import { Button, Link, Snippet } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const links: { href: string; anchorIcon: JSX.Element; label: string }[] = [
  {
    href: "https://github.com/akselipalmer",
    anchorIcon: <FaGithub className=" text-lg ml-1 " />,
    label: "Github",
  },
  {
    href: "https://www.linkedin.com/in/akselipalmer/",
    anchorIcon: <FaLinkedin className=" text-lg ml-1 " />,
    label: "LinkedIn",
  },
];

export default function Links(): JSX.Element {
  return (
    <div className="flex gap-1 flex-wrap ">
      {links.map(({ href, anchorIcon, label }) => (
        <Button
          as={Link}
          href={href}
          anchorIcon={anchorIcon}
          key={label}
          isExternal
          showAnchorIcon
          variant="light"
          color="default"
        >
          {label}
        </Button>
      ))}
      <Snippet symbol="Contact:" size="md" className="bg-transparent ">
        akseli@toddsden.com
      </Snippet>
    </div>
  );
}

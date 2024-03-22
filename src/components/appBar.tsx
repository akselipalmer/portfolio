import { Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function AppBar() {
  return (
    <Navbar className="bg-transparent text-white" isBlurred={false}>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            radius="none"
            variant="light"
            color="default"
            className="text-white font-medium"
            size="lg"
          >
            About
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            radius="none"
            variant="light"
            color="default"
            className="text-white font-medium"
            size="lg"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

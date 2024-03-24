import { Navbar, NavbarBrand } from "@nextui-org/react";

export default function AppBar(): JSX.Element {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="text-xl ">Akseli Palmer</p>
      </NavbarBrand>
    </Navbar>
  );
}

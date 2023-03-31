import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;

import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;

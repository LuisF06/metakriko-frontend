import { Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { BiCog, BiHome, BiMoon, BiSun } from "react-icons/bi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Flex w={"100%"}>
        <Heading>METAKRIKO</Heading>
        <Spacer></Spacer>
        <IconButton icon={<BiHome />} ml={2} isRound="true" size="sm" />
        <IconButton icon={<BiCog />} ml={2} isRound="true" size="sm" />
        <IconButton
          icon={isDark ? <BiSun /> : <BiMoon />}
          ml={2}
          isRound="true"
          size="sm"
          onClick={toggleColorMode}
        />
      </Flex>
    </>
  );
};

export default Header;

import {
  Avatar,
  Wrap,
  WrapItem,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Text,
  Progress,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import Quests from "../Quests";

const Profile = () => {
  return (
    <>
      <Wrap style={{ width: "325px", height: "148px" }}>
        <WrapItem>
          <Avatar
            size="2xl"
            name="Zero-Sama"
            src="https://www.1999.co.jp/itbig57/10578453a.jpg"
          />
        </WrapItem>
        <WrapItem style={{ marginBottom: "15px" }}>
          <Stack spacing={3}>
            <Text fontSize="xl" fontWeight="bold">
              Zero-Sama
            </Text>
            <Stat>
              <StatLabel>Level</StatLabel>
              <StatNumber>30</StatNumber>
              <StatHelpText>Next Level: 65 xp</StatHelpText>
            </Stat>
          </Stack>
        </WrapItem>
      </Wrap>
      <Progress style={{ width: "325px", height: "5px" , marginBottom: "50px"}} value={90} />
      <Quests/>
    </>
  );
};

export default Profile;

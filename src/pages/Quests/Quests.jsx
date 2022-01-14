import { Text, Grid, GridItem } from "@chakra-ui/react";
import Quest from "./Quest";

const Quests = () => {
  const tempQuest = {
    title: "Limpiar Colomos",
    image:
      "http://cr.tiching.com/uploads/contents/2013/10/18/109749_1382097750_m.jpg",
    imageAlt: "Bosque Sucio",
    date: "20/FEB/2022",
    difficulty: "Facil",
    currentparti: 7,
    minparti: 20,
  };
  const quests = [tempQuest, tempQuest, tempQuest, tempQuest];
  return (
    //Badget will change according to difficulty
    <>
      <Text>Quests</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {quests.map((quest) => {
          return (
            <>
              <GridItem>
                <Quest quest={quest} />
              </GridItem>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Quests;

import { Image, Box, Badge } from "@chakra-ui/react";

const Quest = (objt) => {
  let quest = objt.quest;
  return (
    //Badget will change according to difficulty
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge name="difficulty" px="2" colorScheme="teal">
              {quest.difficulty}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            ></Box>
          </Box>
          <Image
            src={quest.image}
            alt={quest.imageAlt}
            style={{ marginTop: "0.5rem" }}
          />
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {quest.title}
          </Box>

          <Box>
            <Box>
              Participantes: {quest.currentparti}/{quest.minparti}
            </Box>
            <Box as="span" color="gray.600" fontSize="sm">
              Fecha: {quest.date}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Quest;

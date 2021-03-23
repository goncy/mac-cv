import React from "react";
import {Stack, Heading} from "@chakra-ui/react";

const TitleSection: React.FC = () => {
  return (
    <Stack alignItems="center">
      <Heading as="h1">Gonzalo Pozzo</Heading>
      <Heading as="h2" fontWeight="500" size="sm">
        Frontend developer
      </Heading>
    </Stack>
  );
};

export default TitleSection;

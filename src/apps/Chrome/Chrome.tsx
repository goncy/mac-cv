import React from "react";
import {Box, Stack} from "@chakra-ui/react";

import ImageSection from "./sections/Image";
import TitleSection from "./sections/Title";
import ContactSection from "./sections/Contact";

type Section = "image" | "title" | "contact";

interface Props {
  onClose: VoidFunction;
}

const SECTIONS: Record<Section, React.ComponentType> = {
  image: ImageSection,
  title: TitleSection,
  contact: ContactSection,
};

const Chrome: React.FC<Props> = () => {
  const sections: Section[] = ["image", "title", "contact"];

  return (
    <Box
      bgGradient="linear(to-l, #9F3282, #F91460)"
      borderBottomRadius="md"
      color="gray.700"
      padding={4}
    >
      <Stack
        backgroundColor="white"
        borderColor="gray.100"
        borderRadius="lg"
        borderWidth={1}
        boxShadow="xl"
        padding={4}
        spacing={6}
      >
        {sections.map((section) => React.createElement(SECTIONS[section], {key: section}))}
      </Stack>
    </Box>
  );
};

export default Chrome;

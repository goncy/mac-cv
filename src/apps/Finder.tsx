import React from "react";
import {Box} from "@chakra-ui/react";

interface Props {
  onClose: VoidFunction;
}

const Finder: React.FC<Props> = () => {
  return (
    <Box>
      Here you will find my contact information, not ready yet but you can check the links on the
      navbar 👆
    </Box>
  );
};

export default Finder;

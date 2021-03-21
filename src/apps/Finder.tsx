import React from "react";
import {Text} from "@chakra-ui/react";

interface Props {
  onClose: VoidFunction;
}

const Finder: React.FC<Props> = () => {
  return (
    <Text padding={2}>
      Here you will find my contact information, not ready yet but you can check the links on the
      navbar 👆
    </Text>
  );
};

export default Finder;

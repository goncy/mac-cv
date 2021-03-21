import React from "react";
import {Text} from "@chakra-ui/react";

interface Props {
  onClose: VoidFunction;
}

const VsCode: React.FC<Props> = () => {
  return (
    <Text padding={2}>
      Here you will find the code for cv.html and you will be able to play around with its code. Not
      ready yet 😞
    </Text>
  );
};

export default VsCode;

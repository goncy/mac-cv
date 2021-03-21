import React from "react";
import {Box} from "@chakra-ui/react";

interface Props {
  onClose: VoidFunction;
}

const VsCode: React.FC<Props> = () => {
  return (
    <Box>
      Here you will find the code for cv.html and you will be able to play around with its code. Not
      ready yet 😞
    </Box>
  );
};

export default VsCode;

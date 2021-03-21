import React from "react";
import {Text} from "@chakra-ui/react";

interface Props {
  onClose: VoidFunction;
}

const Chrome: React.FC<Props> = () => {
  return (
    <Text padding={2}>
      Here you will see an {`"HTML"`} CV of mine, that will be editable from {`"VS Code"`}
    </Text>
  );
};

export default Chrome;

import React from "react";
import {Stack, Text, List, ListItem} from "@chakra-ui/react";

const Readme: React.FC = () => {
  return (
    <Stack padding={2} spacing={4}>
      <Text>In desktop you can find:</Text>
      <List>
        <ListItem>
          <b>Finder</b>: My personal information.
        </ListItem>
        <ListItem>
          <b>cv.html</b>: Graphical version of my information.
        </ListItem>
        <ListItem>
          <b>Visual Studio Code</b>: Play around with the code of cv.html.
        </ListItem>
      </List>
      <Text>Have fun ✨</Text>
    </Stack>
  );
};

export default Readme;

import React from "react";
import {Image, Text, Stack, Link} from "@chakra-ui/react";

import {Application} from "../types";

interface Props {
  app?: Application;
}

const Navbar: React.FC<Props> = ({app}) => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="rgba(0,0,0,0.75)"
      boxShadow="md"
      direction="row"
      height="28px"
      justifyContent="flex-start"
      overflowX="auto"
      paddingX={4}
      spacing={6}
    >
      <Image src="https://icongr.am/material/apple.svg?size=20&color=ffffff" />
      {app && (
        <>
          <Text fontSize="sm" fontWeight="bold" userSelect="none">
            {app.name}
          </Text>
          {app.actions.map((action) => (
            <Link
              key={action.name}
              _hover={{textDecoration: "none"}}
              fontSize="sm"
              fontWeight="500"
              href={action.link}
              isExternal={action.isExternal}
            >
              {action.name}
            </Link>
          ))}
        </>
      )}
    </Stack>
  );
};

export default Navbar;

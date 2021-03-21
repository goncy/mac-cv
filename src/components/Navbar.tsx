import React from "react";
import {Image, Text, Stack, Link, Box} from "@chakra-ui/react";

import {Application} from "../types";

interface Props {
  app?: Application;
}

const Navbar: React.FC<Props> = ({app}) => {
  return (
    <Box backgroundColor="rgba(0,0,0,0.75)" boxShadow="md" paddingX={4}>
      <Stack
        alignItems="center"
        direction="row"
        height="28px"
        justifyContent="flex-start"
        overflowX="auto"
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
    </Box>
  );
};

export default Navbar;

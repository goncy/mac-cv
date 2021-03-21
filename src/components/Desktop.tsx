import React from "react";
import {Image, Text, Grid, Stack, Box} from "@chakra-ui/react";

import {Application} from "../types";

interface Props {
  apps: Application[];
  onOpenApp: (app: Application) => void;
}

const Desktop: React.FC<Props> = ({apps, onOpenApp}) => {
  function handleOpenApp(app: Application, element: HTMLDivElement) {
    onOpenApp(app);
    element.focus();
  }

  return (
    <Grid gap={4} gridTemplateColumns="repeat(auto-fill, minmax(92px, 1fr))" padding={4}>
      {apps.map((app) => (
        <Stack
          key={app.id}
          alignItems="center"
          className="container"
          cursor="pointer"
          padding={1}
          spacing={1}
          tabIndex={0}
          userSelect="none"
          onDoubleClick={(e) => handleOpenApp(app, e.currentTarget)}
          onKeyPress={(e) =>
            ["Enter", "Space"].includes(e.code) && handleOpenApp(app, e.currentTarget)
          }
          onTouchStart={(e) => handleOpenApp(app, e.currentTarget)}
        >
          <Box
            borderRadius="sm"
            padding={1}
            sx={{
              ".container:focus &": {
                backgroundColor: "rgba(255,255,255,0.25)",
              },
            }}
            width="100%"
          >
            <Image margin="auto" maxWidth="64px" src={app.icon} />
          </Box>
          <Text
            borderRadius="sm"
            fontSize="sm"
            fontWeight="bold"
            overflow="hidden"
            paddingX={1}
            sx={{
              ".container:focus &": {
                backgroundColor: "blue.500",
              },
            }}
            textAlign="center"
            textOverflow="ellipsis"
            textShadow="1px 1px 7px rgba(0,0,0,0.7)"
            whiteSpace="nowrap"
            width="100%"
          >
            {app.label || app.name}
          </Text>
        </Stack>
      ))}
    </Grid>
  );
};

export default Desktop;

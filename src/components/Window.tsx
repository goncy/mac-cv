import React from "react";
import {Stack, Box, Text} from "@chakra-ui/react";

interface Props {
  onClose: VoidFunction;
  title: string;
}

const Window: React.FC<Props> = ({onClose, title, children}) => {
  return (
    <Stack
      backgroundColor="gray.700"
      borderColor="gray.600"
      borderRadius="md"
      borderWidth={1}
      boxShadow="xl"
      maxWidth={640}
    >
      <Stack alignItems="center" direction="row" padding={2} position="relative">
        <Stack alignItems="center" direction="row" position="absolute">
          <Box
            backgroundColor="red.500"
            borderRadius={9999}
            cursor="pointer"
            height={3}
            width={3}
            onClick={onClose}
          />
          <Box
            backgroundColor="yellow.500"
            borderRadius={9999}
            height={3}
            opacity={0.25}
            width={3}
          />
          <Box
            backgroundColor="green.500"
            borderRadius={9999}
            height={3}
            opacity={0.25}
            width={3}
          />
        </Stack>
        <Text color="gray.400" flex={1} fontWeight="bold" textAlign="center">
          {title}
        </Text>
      </Stack>
      {children}
    </Stack>
  );
};

export default Window;

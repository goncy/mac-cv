import React from "react";
import {Stack, Box, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";

interface Props {
  onClose: VoidFunction;
  title: string;
  dragConstraints?: React.RefObject<Element>;
}

const Window: React.FC<Props> = ({onClose, dragConstraints, title, children}) => {
  const [canDrag, toggleCanDrag] = React.useState(false);
  const [isDragging, toggleIsDragging] = React.useState(false);

  function handleDragHandleEnter() {
    toggleCanDrag(true);
  }

  function handleDragHandleLeave() {
    if (!isDragging) {
      toggleCanDrag(false);
    }
  }

  function handleDragHandleDown() {
    toggleIsDragging(true);
  }

  function handleDragHandleUp() {
    toggleIsDragging(false);
  }

  return (
    <motion.div
      drag={canDrag}
      dragConstraints={dragConstraints}
      dragElastic={false}
      dragMomentum={false}
      style={{width: "fit-content"}}
    >
      <Stack
        backgroundColor="gray.700"
        borderColor="gray.600"
        borderRadius="md"
        borderWidth={1}
        boxShadow="xl"
        maxWidth={{base: "90vw", md: 640}}
      >
        <Stack alignItems="center" direction="row" padding={2} position="relative">
          <Stack alignItems="center" direction="row" position="absolute">
            <Box
              backgroundColor="red.500"
              borderRadius={9999}
              cursor="pointer"
              height={3}
              tabIndex={0}
              width={3}
              onClick={onClose}
              onKeyPress={(e) => ["Enter", "Space"].includes(e.code) && onClose()}
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
          <Text
            color="gray.400"
            flex={1}
            fontWeight="bold"
            textAlign="center"
            userSelect="none"
            onPointerDown={handleDragHandleDown}
            onPointerEnter={handleDragHandleEnter}
            onPointerLeave={handleDragHandleLeave}
            onPointerUp={handleDragHandleUp}
          >
            {title}
          </Text>
        </Stack>
        {children}
      </Stack>
    </motion.div>
  );
};

export default Window;

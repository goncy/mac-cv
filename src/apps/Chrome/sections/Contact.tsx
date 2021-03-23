import React from "react";
import {Stack, Link} from "@chakra-ui/react";

const ContactSection: React.FC = () => {
  return (
    <Stack alignItems="center" direction="row" justifyContent="center">
      <Link isExternal href="https://twitter.com/goncy">
        Twitter
      </Link>
      <Link isExternal href="https://twitch.tv/goncypozzo">
        Twitch
      </Link>
    </Stack>
  );
};

export default ContactSection;

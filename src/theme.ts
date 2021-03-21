import {extendTheme} from "@chakra-ui/react";

import background from "./assets/background.jpg";

export default extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        color: "white",
        height: "100%",
        overflow: "hidden",
      },
      body: {
        backgroundColor: `#EF1678`,
        backgroundImage: `url(${background})`,
      },
    },
  },
});

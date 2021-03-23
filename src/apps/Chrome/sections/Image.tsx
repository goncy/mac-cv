import React from "react";
import {Image} from "@chakra-ui/react";

import image from "../../../assets/icons/vscode.png";

const ImageSection: React.FC = () => {
  return <Image borderRadius={9999} boxShadow="lg" margin="auto" maxWidth={128} src={image} />;
};

export default ImageSection;

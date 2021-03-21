import {Application} from "./types";
import txtIcon from "./assets/icons/txt.png";
import finderIcon from "./assets/icons/finder.png";
import vscodeIcon from "./assets/icons/vscode.png";
import chromeIcon from "./assets/icons/chrome.png";
import FinderApp from "./apps/Finder";
import CvApp from "./apps/Cv";
import ReadmeApp from "./apps/Readme";
import VsCodeApp from "./apps/VsCode";

export const APPS: Application[] = [
  {
    id: "finder",
    icon: finderIcon,
    name: "Finder",
    component: FinderApp,
    actions: [
      {
        name: "Phone",
        link: "tel:5491141634695",
        isExternal: true,
      },
      {
        name: "Email",
        link: "mailto:gonzalo.pozzo4@gmail.com",
        isExternal: true,
      },
      {
        name: "LinkedIN",
        link: "https://www.linkedin.com/in/gonzalopozzo/",
        isExternal: true,
      },
      {
        name: "Twitter",
        link: "https://twitter.com/goncy",
        isExternal: true,
      },
      {
        name: "Twitch",
        link: "https://twitch.tv/goncypozzo",
        isExternal: true,
      },
      {
        name: "Github",
        link: "https://github.com/goncy",
        isExternal: true,
      },
    ],
  },
  {
    id: "vscode",
    icon: vscodeIcon,
    component: VsCodeApp,
    name: "Visual Studio Code",
    actions: [
      {
        name: "CV",
        link: "/cv",
      },
    ],
  },
  {
    id: "cv",
    icon: chromeIcon,
    component: CvApp,
    name: "Google Chrome",
    label: "cv.html",
    actions: [],
  },
  {
    id: "readme",
    component: ReadmeApp,
    icon: txtIcon,
    name: "TextEdit",
    label: "readme.txt",
    actions: [],
  },
];

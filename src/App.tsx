import React from "react";
import {Stack} from "@chakra-ui/react";
import {Switch, Route, useHistory, useLocation} from "react-router-dom";
import {motion} from "framer-motion";

import Navbar from "./components/Navbar";
import Desktop from "./components/Desktop";
import Window from "./components/Window";
import {Application} from "./types";
import {APPS} from "./constants";

const App: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const container = React.useRef(null);
  const selectedApp = React.useMemo(() => {
    const [, route] = location.pathname.split("/");

    return APPS.find((app) => app.id === route);
  }, [location.pathname]);

  function handleOpenApp(app: Application) {
    return history.push(app.id);
  }

  function handleCloseApp() {
    return history.push("/");
  }

  return (
    <Stack height="100%" position="relative" spacing={0}>
      <Navbar app={selectedApp} />
      <Stack ref={container} height="100%">
        <Desktop apps={APPS} onOpenApp={handleOpenApp} />
        <Switch>
          {APPS.map((app) => (
            <Route
              key={app.id}
              exact
              path={`/${app.id}`}
              render={() => (
                <motion.div
                  key={app.id}
                  drag
                  dragConstraints={container}
                  dragElastic={false}
                  dragMomentum={false}
                  style={{width: "100%", maxWidth: 640}}
                >
                  <Window title={app.name} onClose={handleCloseApp}>
                    {React.createElement(app.component)}
                  </Window>
                </motion.div>
              )}
            />
          ))}
        </Switch>
      </Stack>
    </Stack>
  );
};

export default App;

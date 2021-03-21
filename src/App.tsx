import React from "react";
import {Stack} from "@chakra-ui/react";
import {Switch, Route, useHistory, useLocation} from "react-router-dom";

import Navbar from "./components/Navbar";
import Desktop from "./components/Desktop";
import Window from "./components/Window";
import {Application} from "./types";
import {APPS} from "./constants";

const App: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const dragZone = React.useRef(null);
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
      <Stack ref={dragZone} height="100%">
        <Desktop apps={APPS} onOpenApp={handleOpenApp} />
        <Switch key={location.pathname} location={location}>
          {APPS.map((app) => (
            <Route
              key={app.id}
              exact
              path={`/${app.id}`}
              render={(props) => (
                <Window
                  key={app.id}
                  dragConstraints={dragZone}
                  title={`${app.name}${app.label ? ` - ${app.label}` : ``}`}
                  onClose={handleCloseApp}
                  {...props}
                >
                  {React.createElement(app.component)}
                </Window>
              )}
            />
          ))}
        </Switch>
      </Stack>
    </Stack>
  );
};

export default App;

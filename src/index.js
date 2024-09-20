import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import {ThemeProvider, SideMenuProvider, SearchProvider} from "./context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <SideMenuProvider>
        <SearchProvider>
          <App/>
        </SearchProvider>
      </SideMenuProvider>
    </ThemeProvider>
  </BrowserRouter>
);

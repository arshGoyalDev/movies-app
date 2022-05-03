import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ThemeProvider, SideMenuProvider } from "./context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <SideMenuProvider>
        <App />
      </SideMenuProvider>
    </ThemeProvider>
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PresentationDeck, shouldRenderPresentation } from "@/components/PresentationDeck";
import "./index.css";

const Root = shouldRenderPresentation(window.location.pathname) ? PresentationDeck : App;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

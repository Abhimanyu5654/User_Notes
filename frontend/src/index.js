import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import PWAPrompt from "react-ios-pwa-prompt";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const container=document.getElementById("root");
const root=createRoot(container);
root.render(
  <React.StrictMode>
    <App />
    <PWAPrompt
      copyTitle="Install to your Device"
      copyAddHomeButtonLabel="Add to Home Screen"
      promptOnVisit={1}
      timesToShow={3}
      copyBody="This website has app functionality. Add it to your
home screen to use it in fullscreen and while offline."
      copyClosePrompt="Close"
      permanentlyHideOnDismiss={false}
    />
  </React.StrictMode>,
  
);
// serviceWorkerRegistration.register();
reportWebVitals();
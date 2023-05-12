import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Memotest from "./Memotest.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Memotest />
  </React.StrictMode>
);

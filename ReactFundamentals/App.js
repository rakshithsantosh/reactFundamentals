import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement("h1", { id: "something" }, [
  React.createElement("p", { id: "child" }, "this is a header"),
]);

const root = createRoot(document.getElementById("root"));

root.render(parent);

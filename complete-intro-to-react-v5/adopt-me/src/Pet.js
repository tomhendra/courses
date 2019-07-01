import React from "react";
export default function Pet({ name, animal, breed }) {
  // createElement accepts 3 args: type of element, attributes & children (which can be an array)
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
}

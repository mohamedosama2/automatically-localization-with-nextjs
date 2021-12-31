import React from "react";

function AutoLocalization({ children = [], index = 0 }) {
  return <>{children[index]}</>;
}

export default AutoLocalization;

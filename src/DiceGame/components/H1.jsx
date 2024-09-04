import React from "react";

const H1 = (props) => {
  const { children } = props;
  const h1style = { color: "black", fontSize: "32px" };
  return <div style={h1style}>{children}</div>;
};

export default H1;

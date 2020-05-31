import React from "react";
import ReactLoading from "react-loading";

const Loader = () => (
  <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
    <ReactLoading type="spin" color="pink" height={"20%"} width={"20%"} />
  </div>
);
export default Loader;

import React from "react";
import ReactLoading from "react-loading";

const Loader = () => (
  <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
    <ReactLoading type="spin" color="#e60278" height={"20%"} width={"20%"} />
  </div>
);
export default Loader;

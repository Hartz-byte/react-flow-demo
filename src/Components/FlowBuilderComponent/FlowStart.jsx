import React, { useContext, useEffect, useState } from "react";
import { Handle, Position } from "reactflow";

const FlowStart = ({ id }) => {
  // node click handle
  const nodeClickHandle = () => {
    console.log("node clicked");
  };

  return (
    <div
      style={{
        width: "120px",
        height: "40px",
        boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.3)",
        backgroundColor: "white",
      }}
      onClick={nodeClickHandle}
    >
      {/* node head section */}
      <div
        style={{
          width: "100%",
          height: "15px",
          backgroundColor: "#B2F0E3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Action Process Symbol text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "5px",
            height: "15px",
          }}
        >
          <p style={{ fontSize: "7px", fontWeight: "600" }}>Flow Start</p>
        </div>
      </div>

      {/* node message text section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginLeft: "7px",
          height: "25px",
        }}
      >
        <p style={{ fontSize: "7px", fontWeight: "400" }}>
          {/* {currentNodeMessage} */}
          flow start node
        </p>
      </div>

      {/* handle */}
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default FlowStart;

import React from "react";
import { Handle, Position } from "reactflow";

const FlowStart = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "127px",
        boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#008069",
        borderRadius: 7,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* node title section */}
      <div
        style={{
          width: "90px",
          height: "20px",
          backgroundColor: "#E9EDEF",
          margin: "5px",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "7px",
            fontWeight: "600",
            marginLeft: "7px",
            color: "#008069",
          }}
        >
          Flow Start
        </p>
      </div>

      {/* node input section */}
      <div
        style={{
          width: "90px",
          height: "90px",
          backgroundColor: "#EAE6DF",
          margin: "0 5px 5px 5px",
          borderRadius: 7,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* first input */}
        <label style={{ fontSize: "5px", margin: "5px 2px 4px 2px" }}>
          Type, press enter to add keyword
        </label>
        <input
          type="text"
          placeholder="Enter keywords"
          style={{
            width: "80px",
            height: "15px",
            fontSize: "6px",
            marginLeft: "1px",
          }}
        />

        {/* second input */}
        <label style={{ fontSize: "5px", margin: "5px 2px 4px 2px" }}>
          Enter regex to match substring trigger
        </label>
        <input
          type="text"
          style={{
            width: "80px",
            height: "15px",
            fontSize: "6px",
            marginLeft: "1px",
          }}
        />
      </div>

      {/* handle */}

      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default FlowStart;

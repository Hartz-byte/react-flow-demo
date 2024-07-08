import React from "react";
import { Handle, Position } from "reactflow";

const Message = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "98px",
        boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fff",
        borderRadius: 7,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* node title section */}
      <div style={{ display: "flex", gap: 0 }}>
        <div
          style={{
            width: "5px",
            height: "20px",
            backgroundColor: "#008069",
            margin: "5px 0 5px 5px",
            borderRadius: "7px 0 0 7px",
            display: "flex",
            alignItems: "center",
          }}
        />

        <div
          style={{
            width: "85px",
            height: "20px",
            backgroundColor: "#E9EDEF",
            margin: "5px 5px 5px 0",
            borderRadius: "0 7px 7px 0",
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
            Message
          </p>
        </div>
      </div>

      {/* node input section */}
      <div
        style={{
          width: "90px",
          height: "62px",
          backgroundColor: "#EAE6DF",
          margin: "0 5px 5px 5px",
          borderRadius: 7,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* first input */}
        <textarea
          name=""
          id=""
          style={{
            width: "78px",
            height: "20px",
            fontSize: "6px",
            marginTop: "5px",
          }}
        />

        {/* add button */}
        <button
          style={{
            width: "86px",
            height: "20px",
            marginTop: "5px",
            fontSize: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          + Add Button
        </button>
      </div>

      {/* handle */}
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default Message;

import React, { useState } from "react";
import { Handle, Position } from "reactflow";

const Message = () => {
  const [numTextareas, setNumTextareas] = useState(1);

  const handleAddTextarea = () => {
    if (numTextareas < 4) {
      setNumTextareas(numTextareas + 1);
    }
  };

  const handleRemoveTextarea = () => {
    if (numTextareas > 1) {
      setNumTextareas(numTextareas - 1);
    }
  };

  const textareaHeight = 20;

  return (
    <div
      style={{
        width: "100px",
        height: `100px + ${numTextareas * textareaHeight}px`,
        boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fff",
        borderRadius: 7,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* node title section */}
      <div style={{ display: "flex" }}>
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
          height: `62px + ${numTextareas * textareaHeight}px`,
          backgroundColor: "#EAE6DF",
          margin: "0 5px 5px 5px",
          borderRadius: 7,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* inputs */}
        {Array.from({ length: numTextareas }, (_, i) => (
          <textarea
            key={i}
            name=""
            id=""
            style={{
              width: "78px",
              height: textareaHeight + "px",
              fontSize: "6px",
              marginTop: "5px",
            }}
          />
        ))}

        {/* add button */}
        <button
          style={{
            width: "86px",
            height: "20px",
            marginTop: "5px",
            fontSize: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: numTextareas === 4 ? "not-allowed" : "pointer",
          }}
          disabled={numTextareas === 4}
          onClick={handleAddTextarea}
        >
          + Add Button
        </button>

        {/* remove button */}
        <button
          style={{
            width: "86px",
            height: "20px",
            marginTop: "5px",
            fontSize: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: numTextareas === 1 ? "not-allowed" : "pointer",
            disabled: numTextareas === 1,
          }}
          onClick={handleRemoveTextarea}
        >
          - Remove
        </button>
      </div>

      {/* handle */}
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default Message;

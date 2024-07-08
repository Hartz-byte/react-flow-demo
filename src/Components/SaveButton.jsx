import React from "react";

const SaveButton = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#F3F3F3",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <button
        style={{ backgroundColor: "#008069", color: "#fff", marginRight: 130 }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default SaveButton;

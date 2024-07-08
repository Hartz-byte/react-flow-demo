import React, { useContext } from "react";
// import MessageText from "./SettingsPanelComponent/MessageText";
import { FlowContext } from "../ContextAPI/Context";

const SidePanel = () => {
  const { addNode } = useContext(FlowContext);

  return (
    <div
      style={{
        width: "27vw",
        border: "1px solid #D9D9D9",
        borderRadius: "3px",
        height: "90vh",
        overflowY: "auto",
      }}
    >
      {/* Action Process node button */}
      <button
        style={{
          width: "150px",
          height: "80px",
          margin: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
        }}
        onClick={() => addNode({ type: "process" })}
      >
        {/* <img
              src={ActionProcess}
              alt="Message Icon"
              width="60"
              height="60"
            /> */}
        Action Process
      </button>
    </div>
  );
};

export default SidePanel;

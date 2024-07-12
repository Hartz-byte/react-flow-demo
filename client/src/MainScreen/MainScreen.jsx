import React from "react";
import FlowBuilder from "../Components/FlowBuilder";
import SaveButton from "../Components/SaveButton";
import SidePanel from "../Components/SidePanel";

const MainScreen = () => {
  return (
    <div>
      {/* save button component */}
      <SaveButton />

      <div style={{ display: "flex" }}>
        {/* node / settings panel component */}
        <SidePanel />

        {/* flow builder component */}
        <FlowBuilder />
      </div>
    </div>
  );
};

export default MainScreen;

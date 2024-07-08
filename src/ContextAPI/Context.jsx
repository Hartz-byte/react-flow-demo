import React, { createContext, useState } from "react";

const FlowContext = createContext({
  initialNodes: [],
  initialEdges: [],
  addNode: () => {},
});

let id;

const FlowProvider = ({ children }) => {
  const [initialEdges, setInitialEdges] = useState([]);

  // initial nodes
  const [initialNodes, setInitialNodes] = useState([
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { message: "symbol message 1", id },
      type: "process",
    },
  ]);

  // add new node
  const addNode = () => {
    setInitialNodes([
      ...initialNodes,
      {
        id: `${initialNodes.length + 1}`,
        position: { x: 150, y: 30 * (initialNodes.length * 1.3) },
        data: { message: "textNode", id },
        type: "message",
      },
    ]);
  };

  return (
    <FlowContext.Provider
      value={{
        initialNodes,
        setInitialNodes,
        addNode,
        initialEdges,
        setInitialEdges,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export { FlowContext, FlowProvider };

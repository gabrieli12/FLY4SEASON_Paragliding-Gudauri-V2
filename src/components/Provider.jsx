import React, { createContext, useContext } from "react";
import { useState } from "react";

const Context = createContext();

export function Provider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return <Context value={{isSidebarOpen, setIsSidebarOpen}}>{children}</Context>;
}


export const useData = () => useContext(Context);

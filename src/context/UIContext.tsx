"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface UIContextType {
  isSimpleMode: boolean;
  setIsSimpleMode: (val: boolean) => void;
  isLightMode: boolean;
  setIsLightMode: (val: boolean) => void;
  fontSize: number;
  setFontSize: (val: number) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isSimpleMode, setIsSimpleMode] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [fontSize, setFontSize] = useState(22); // Default 22px

  useEffect(() => {
    if (isSimpleMode) {
      document.documentElement.classList.add("simplicity-mode");
    } else {
      document.documentElement.classList.remove("simplicity-mode");
    }
  }, [isSimpleMode]);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark");
    }
  }, [isLightMode]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-base', `${fontSize}px`);
  }, [fontSize]);

  return (
    <UIContext.Provider value={{ 
      isSimpleMode, 
      setIsSimpleMode,
      isLightMode,
      setIsLightMode,
      fontSize,
      setFontSize
    }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
}

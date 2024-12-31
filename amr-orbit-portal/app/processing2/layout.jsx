// src/processing/layout.jsx
"use client";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="container min-h-screen bg-white-900 text-white flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

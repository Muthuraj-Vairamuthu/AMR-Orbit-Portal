// src/components/services/UploadButton.jsx
"use client"; 

import React from "react";
import { useRouter } from "next/navigation"; 

export default function UploadButton() {
  const router = useRouter(); 

  const handleNavigation = () => {
    router.push("/processing");
  };

  return (
    <div className="upload-button-container">
      <button
        className="upload-button bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg"
        onClick={handleNavigation}
      >
        Upload Your Dataset
      </button>
    </div>
  );
}

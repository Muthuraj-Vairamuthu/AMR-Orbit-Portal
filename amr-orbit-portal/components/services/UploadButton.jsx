"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function UploadButton() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/processing");
  };

  return (
    <button
      className="bg-[#0D1B32] hover:bg-[#0E2845] text-white font-bold py-4 px-8 text-lg rounded-lg shadow-lg transition duration-300 transform hover:scale-110"
      onClick={handleNavigation}
    >
      Upload Your Dataset
    </button>
  );
}

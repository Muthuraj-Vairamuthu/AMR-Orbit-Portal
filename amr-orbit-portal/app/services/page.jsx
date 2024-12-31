import React from "react";
import ServiceCard from "@/components/services/ServiceCard";
import UploadButton from "@/components/services/UploadButton";

export default function Services() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#2A2F36] py-16">
      {/* Title */}
      <h1 className="text-4xl lg:text-6xl font-bold text-white mb-16 text-center">
        AMR Insights: Upload your Dataset
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        <ServiceCard title="Isolation Burden" />
        <ServiceCard title="Resistance Analysis" />
        <ServiceCard title="Scorecards" />
      </div>

      {/* Upload Button */}
      <div className="mt-12">
        <UploadButton />
      </div>
    </div>
  );
}

// src/pages/services.jsx
import React from 'react';
import ServiceCard from '@/components/services/ServiceCard';
import UploadButton from '@/components/services/UploadButton';

export default function Services() {
  return (
    <div className="container">
      <h1 className="text-3xl lg:text-5xl  text-center text-white mb-6">AMR Insights: Upload your Dataset</h1>

      <div className="services-grid">
        <ServiceCard title="Isolation Burden" />
        <ServiceCard title="Resistance Analysis" />
        <ServiceCard title="Scorecards" />
      </div>
      <UploadButton />
    </div>
  );
}

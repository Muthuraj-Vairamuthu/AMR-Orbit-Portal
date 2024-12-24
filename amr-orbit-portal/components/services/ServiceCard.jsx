// src/components/services/ServiceCard.jsx
import React from 'react';
import Image from 'next/image';
import IsolationBurden from '@/public/services/IsolationBurden.png';
import ResistanceAnalysis from '@/public/services/ResistanceAnalysis.png';
import Scorecards from '@/public/services/ScorecardMain.png';
const imageMap = {
  'Isolation Burden': IsolationBurden,
  'Resistance Analysis': ResistanceAnalysis,
  'Scorecards': Scorecards
};

export default function ServiceCard({ title }) {
  return (
    
    <div className="service-card w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px] rounded-xl shadow-lg overflow-hidden">
      <Image src={imageMap[title]} alt={title} layout="responsive" width={400} height={250} className="object-cover" />
      <h2 className="text-center font-medium text-lg p-2">{title}</h2>
    </div>
  );
}

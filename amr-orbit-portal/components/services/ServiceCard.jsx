import React from "react";
import Image from "next/image";
import IsolationBurden from "@/public/services/IsolationBurden.png";
import ResistanceAnalysis from "@/public/services/ResistanceAnalysis.png";
import Scorecards from "@/public/services/ScorecardMain.png";

const imageMap = {
  "Isolation Burden": IsolationBurden,
  "Resistance Analysis": ResistanceAnalysis,
  "Scorecards": Scorecards,
};

export default function ServiceCard({ title }) {
  return (
    <div className="bg-[#191D23] rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-110 w-[350px] md:w-[400px] lg:w-[450px]">
      <Image
        src={imageMap[title]}
        alt={title}
        layout="responsive"
        width={450}
        height={300}
        className="object-cover"
      />
      <h2 className="text-center text-white text-xl font-bold py-4">
        {title}
      </h2>
    </div>
  );
}

// src/processing/page.jsx
"use client";
import {useRouter} from "next/navigation"
import React from "react";
import { Inter } from "next/font/google";

const inter2 = Inter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Page() {

  return (
     <div className={inter2.className}>
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="w-full max-w-7xl p-8 rounded-lg ">
        {/* Title */}
        <h2 className="text-center text-[30px] font-semibold text-white mb-10">
          Processing your Dataset
        </h2>

        {/* Forms Section */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Form */}
          <div
            className=" bg-[#191D23]  p-6 rounded-lg shadow-md"
            style={{ width: "573px", height: "500px", borderRadius: "30px" }}
          >
            <div className="flex justify-center">
  <h3 className="text-[28px] font-semibold text-white mb-4">
    Map Dataset Columns
  </h3>
</div>

            {/* Bacterial Infection */}
            <div className="mb-4">
              <label
                className="block text-[20px] font-arial text-gray-300 mb-2"
                htmlFor="bacterial-infection"
              >
                Speciality: <span className="text-red-500">*</span>
              </label>
              <select
                id="bacterial-infection"
                className="w-full bg-[#D9D9D9] text-black rounded-lg"
                style={{ width: "478px", height: "70px",borderRadius: "10px",padding: "10px"}}
           
              >
                <option value="">Choose Column</option>
              </select>
            </div>

            {/* Source Input */}
            <div className="mb-4">
              <label
                className="block text-[20px] font-medium text-gray-300 mb-2"
                htmlFor="source-input"
              >
                Gender: <span className="text-red-500">*</span>
              </label>
              <select
                id="source-input"
                className="w-full bg-[#D9D9D9] text-black rounded-lg"
                style={{ width: "478px", height: "70px",padding: "10px" }}
              >
                <option value="">Choose Column</option>
              </select>
            </div>

            {/* Antibiotic Format */}
            <div className="mb-4">
              <label
                className="block text-[20px] font-medium text-black-300 mb-2"
                htmlFor="antibiotic-format"
              >
                Age: <span className="text-red-500">*</span>
              </label>
              <input
                id="antibiotic-format"
                type="text"
                placeholder="Column Format"
                className="w-full bg-[#D9D9D9] text-black rounded-lg"
                style={{ width: "478px", height: "70px",padding: "10px"}}
              />
            </div>
          </div>

          {/* Right Form */}
          <div
            className="bg-[#191D23] p-6 rounded-lg shadow-md"
            style={{ width: "573px", height: "453px", borderRadius: "30px" }}
          >
            <div className="flex justify-center">
  <h3 className="text-[28px] font-semibold text-white mb-4">
    Map Dataset Columns
  </h3>
</div>

            {/* Dataset Format */}
            <div className="mb-4">
              <label
                className="block text-[20px] font-medium text-gray-300 mb-2"
                htmlFor="dataset-format"
              >
                Inpatient / Outpatient: <span className="text-red-500">*</span>
              </label>
              <select
                id="dataset-format"
                className="w-full bg-[#D9D9D9] text-black rounded-lg"
                style={{ width: "478px", height: "70px" ,padding: "10px"}}
              >
                <option value="">Choose Column</option>
              </select>
            </div>

            {/* Cluster Attribute */}
            <div className="mb-4">
              <label
                className="block text-[20px] font-medium text-gray-300 mb-2"
                htmlFor="cluster-attribute"
              >
                Cluster Attribute: <span className="text-red-500">*</span>
              </label>
              <select
                id="cluster-attribute"
                className="w-full bg-[#D9D9D9] text-black rounded-lg"
                style={{ width: "478px", height: "70px" ,padding: "10px"}}
              >
                <option value="">Choose Column</option>
              </select>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center text-[28px] mt-8">
          <button
  className="bg-[#0D1B32] text-white font-semibold rounded-lg hover:bg-[#0E2845]"
  style={{
    width: "669px",
    height: "114px",
    borderRadius: "30px",
  }}
>
  Process your Dataset
</button>

        </div>
      </div>
    </div>
    </div>
  );
}

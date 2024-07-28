"use client";

import Step1Form from "../forms/step1-form";

export default function Step1Card() {
  return (
    <div className="rounded-xl w-[100%] lg:w-2/3  mx-auto shadow-lg my-auto space-y-4  bg-white p-6">
      <div className="flex justify-between items-center">
        <p className="text:lg lg:text-2xl font-bold text-[#2ea2bd]">
          Etape 1: Personal Information
        </p>

        <div className="flex space-x-4 ">
          <div className="h-4 w-4 border border-gray-300 bg-[#2ea2bd] rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-white rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-white rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-white rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-white rounded-md"></div>
        </div>
      </div>
      <Step1Form id="add-personnal-information" />
    </div>
  );
}

"use client";

import Step2Form from "../forms/step2-form";

export default function Step2Card() {
  return (
    <div className="rounded-xl w-2/3 mx-auto shadow-lg my-auto space-y-4  bg-white p-6">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-blue-500">
          Etape 2
        </p>

        <div className="flex space-x-4 ">
          <div className="h-4 w-4 border border-gray-300 bg-blue-500 rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-blue-500 rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-white rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-white rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-white rounded-md"></div>
        </div>
      </div>
      <Step2Form id="add-personnal-information" />
    </div>
  );
}
